import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Keyboard
} from 'react-native';

export default function Pokemon() {
  const [input, setInput] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const buscarPokemon = async () => {
    if (!input.trim()) {
      alert('Digite o nome de um Pokémon.');
      return;
    }

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.toLowerCase()}`);
      const data = await response.json();

      const jaExiste = pokemons.some(p => p.id === data.id);
      if (jaExiste) {
        alert('Esse Pokémon já foi adicionado.');
        return;
      }

      setPokemons(prev => [...prev, { ...data, detalhesVisiveis: false }]);
      setInput('');
      Keyboard.dismiss();
    } catch (error) {
      alert('Pokémon não encontrado.');
    }
  };

  const toggleDetalhes = (id) => {
    setPokemons(prev =>
      prev.map(p =>
        p.id === id ? { ...p, detalhesVisiveis: !p.detalhesVisiveis } : p
      )
    );
  };

  const removerPokemon = (id) => {
    setPokemons(prev => prev.filter(p => p.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokédex</Text>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Digite o nome do Pokémon"
          value={input}
          onChangeText={setInput}
          style={styles.input}
        />
        <TouchableOpacity onPress={buscarPokemon} style={styles.button}>
          <Text style={styles.buttonText}>Buscar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {pokemons.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.name}>{item.name.toUpperCase()}</Text>
              <TouchableOpacity onPress={() => removerPokemon(item.id)} style={styles.removeButton}>
                <Text style={styles.removeText}>❌</Text>
              </TouchableOpacity>
            </View>

            <Image source={{ uri: item.sprites.front_default }} style={styles.image} />

            <TouchableOpacity onPress={() => toggleDetalhes(item.id)} style={styles.detailsButton}>
              <Text style={styles.detailsText}>
                {item.detalhesVisiveis ? 'Ocultar detalhes' : 'Mais detalhes'}
              </Text>
            </TouchableOpacity>

            {item.detalhesVisiveis && (
              <View style={styles.detailsContainer}>
                <Text>Tipo(s): {item.types.map(t => t.type.name).join(', ')}</Text>
                <Text>Altura: {item.height / 10} m</Text>
                <Text>Peso: {item.weight / 10} kg</Text>
                <Text>Base XP: {item.base_experience}</Text>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: '#D62828',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#003049',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#003049',
    marginLeft: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
  },
  scrollContainer: {
    paddingBottom: 30,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#003049',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003049',
  },
  removeButton: {
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  removeText: {
    fontSize: 20,
    color: '#d00000',
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 8,
  },
  detailsButton: {
    marginTop: 12,
    backgroundColor: '#f77f00',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  detailsText: {
    color: 'white',
    fontWeight: 'bold',
  },
  detailsContainer: {
    marginTop: 12,
    alignItems: 'center',
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    padding: 10,
    width: '100%',
  },
});
