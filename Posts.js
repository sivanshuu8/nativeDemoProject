import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useState, useContext} from 'react';

import UserContext from './userContext';

//const theTitle = createContext();

export default Posts = ({navigation}) => {
  //user search data
  const [term, setTerm] = useState('');

  const {postDetailObj} = useContext(UserContext);
  // Posts and User api data
  //  const [name, setName] = useState([]);
  //  const [title, setTitle] = useState([]);

  // console.log(term);

  // saving post api data in a variable
  const postDetail = postDetailObj.map(values => {
    const {title} = values;

    return title;
  });

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.SearchBar}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={text => {
            setTimeout(() => {
              setTerm(text);
            }, 500);
          }}
        />
        <View key={postDetail.id}>
          {postDetail
            .filter(val => {
              //console.log(term);
              return val.toLowerCase().startsWith(term.toLowerCase());
            })
            .slice(0, 20)
            .map(el => (
              <TouchableOpacity
                onPress={() => {
                  const onPress = () => {
                    return (
                      <>
                        {navigation.navigate('Search', {
                          element: el,
                        })}
                      </>
                    );
                  };
                  onPress();
                }}>
                <View key={el.id} style={styles.boxes}>
                  <Text>{el}</Text>
                </View>
              </TouchableOpacity>
            ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    height: 1000,
    marginTop: 10,
  },
  boxes: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
  },
  userName: {
    fontSize: 20,
    color: '#1652c9',
  },
  header: {
    flex: 1,
    alignContent: 'center',
  },
  Lists: {
    marginTop: 15,
  },
  SearchContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scroll: {
    // backgroundColor: ,
  },
  SearchBar: {
    backgroundColor: '#fff',
    height: 50,
    alignSelf: 'stretch',
    padding: 10,
    fontSize: 20,
    borderRadius: 10,
    marginHorizontal: 15,
    textTransform: 'lowercase',
    //  color:"",
  },
});

// export { theTitle };
// <Search title={title} />

/*   <FlatList 
                style={styles.Lists}
                data={(title, name)}
                renderItem={({item}) => { 
                        title.map((title) => {
                          
                            if(item.id === title.id){
                                
                                
                                    arr1 = item.username;
                                    arr2 = title.title;
                                
 
                          }
                        })

                      
                }}
            /> */

/* 
            <FlatList 
                style={styles.Lists}
                data={{a}}
                renderItem={({a}) => {
                    a.filter((val) => {
                        console.log(term);
                        return val.toLowerCase().startsWith(term.toLowerCase());
                    })
                    .slice(0,5)
                    .map((title) => {
                        console.log(title);
                        return(
                            <TouchableOpacity>
                                <View>
                                    <Text>
                                        {title.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                    
                }}
                />
                navigation.navigate('Search')
            */
