import { Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function Detail(props) {
  const { route, navigation } = props;
  const {navigate, goBack} = navigation
  const { product } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.img}
          source={product.image}
        />
      </View>

      <Text style={styles.productName}>Pina Mountain</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.discount}>15% OFF</Text>
        <Text style={styles.originalPrice}>{product.price}</Text>
        <View style={styles.finalPriceContainer}>
          <Text style={styles.finalPrice}>449$</Text>
        </View>
      </View>

      <Text style={styles.descriptionTitle}>Description</Text>
      <Text style={styles.descriptionText}>
        It is a very important form of writing as we write almost everything in paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.heartIcon}>
          <Image
            source={require('../assets/5.jpg')}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('List')}>
          <Text style={styles.buttonText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  imageContainer: {
    backgroundColor: '#FFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    height:400,
    width:400
  },
  img: {
    height: 250,
    width: 250,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 35,
    lineHeight:43.6,
    fontWeight: 400,
    marginVertical: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width:'100%'
  },
  discount: {
    fontSize: 25,
    lineHeight:31.14,
    fontWeight: 400,
    marginRight: 10,
    color:'gray'

  },
  originalPrice: {
    textDecorationLine: 'line-through',
    fontSize: 25,
    lineHeight:31.14,
    fontWeight: 400,
    marginRight: 10,
    color:'gray'
  },
  finalPriceContainer: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 5,
    borderRadius: 5,
    marginLeft:100,
    justifyContent:'center'
  },
  finalPrice: {
    fontSize: 25,
    lineHeight:31.14,
    fontWeight: 400,
    marginRight: 10,
  },
  descriptionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
  },
  descriptionText: {
    textAlign: 'center',
    fontSize: 22,
    lineHeight:27.4,
    fontWeight: 400,
    paddingHorizontal: 20,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 30,
    alignItems: 'center',
  },
  heartIcon: {
    marginRight: 20,
  },
  button: {
    backgroundColor: '#E94141',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 25, 
    flex: 1,
    marginLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 18,
  },
});
