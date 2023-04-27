import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import {useState, useContext} from 'react';
import React from 'react';
import UserContext from './userContext';

export type Props = {
  navigation: any;
};

const UserList: React.FC<Props> = ({navigation}: Props) => {
  const [searchedTerm, setSearchedTerm] = useState('');
  const {userPostDetail}: any = useContext(UserContext);

  // fetching title from Posts API
  const postTitle: any = userPostDetail.map((values: {title: string}) => {
    const {title} = values;
    return title;
  });

  const onPress = (el: string) => {
    return (
      <>
        {navigation.navigate('User', {
          searchedValue: el,
        })}
      </>
    );
  };

  const filterredList: string = postTitle
    .filter((val: string) => {
      return val.toLowerCase().startsWith(searchedTerm.toLowerCase());
    })
    .slice(0, 20)
    .map(
      (
        el:
          | string
          | number
          | boolean
          | any
          | React.ReactElement<any, string | React.JSXElementConstructor<any>>
          | React.ReactFragment
          | React.ReactPortal
          | null
          | undefined,
      ) => (
        <TouchableOpacity onPress={() => onPress(el)}>
          <View key={el.id} style={styles.boxes}>
            <Text>{el}</Text>
          </View>
        </TouchableOpacity>
      ),
    );

  const debounce = (text: string) => {
    setTimeout(() => {
      setSearchedTerm(text);
    }, 500);
  };

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.SearchContainer}>
        <TextInput
          placeholder="Search"
          style={styles.SearchBar}
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={text => debounce(text)}
        />
        <View key={userPostDetail.id}>{filterredList}</View>
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
export default UserList;
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
