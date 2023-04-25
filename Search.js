import { StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, Modal} from "react-native";
import {  useState, useContext  } from "react";
import UserContext from "./userContext";


const Search = ( {route, navigation} ) => {

    //context data from App.js 
    const { name, postDetailObj } = useContext(UserContext);
    const [ModelVal, setModelVal] = useState(false);
   // console.log(postDetailObj);
    const gettingUserVal = name.map((el) => {
        return el;
    })

    const postData = postDetailObj.map((el) => {
        return el;
    })

    // posts data 
    const { element } = route.params;
      const selectedValue = JSON.stringify(element);
  //  console.log(element);
  //User api call
 
  const searchedPostDetail = postData.find(el => el.title === element)

    const displayName = () => {
              
        //console.log(searchedPostDetail.userId)
                const user = gettingUserVal.find(el => searchedPostDetail.userId === el.id)   
        return(
                <View>
                     <Text style={styles.Result}>
                          <Text style={styles.key}>Username: </Text><Text style={styles.resultText}>{user.username}</Text>
                    </Text>
                 </View>
             );     
    }
  
    //console.log(a());
//const searchedPostDetail = postData.find(el => el.title === element)

        const displayPostData = () => {
            

            return (
                    <View>
                            <Text style={styles.Result}>
                                <Text style={styles.key}>Title</Text> : <Text style={styles.resultText}>{searchedPostDetail.title}</Text>{'\n'}{'\n'}
                                <Text style={styles.key}>Id</Text> : <Text>{searchedPostDetail.id}</Text>{'\n'}{'\n'}
                                <Text style={styles.key}>Body</Text> : <Text>{searchedPostDetail.body}</Text>{'\n'}{'\n'}
                                <Text style={styles.key}>User Id</Text> : <Text>{searchedPostDetail.userId}</Text>{'\n'}{'\n'}
                            </Text>
                    </View>
                );    
        }
        

    return (
      <>
       
     <View style={[styles.pop, ModelVal ? {opacity: 0.5}: '']}>
           
         <View>
                <TouchableOpacity onPress={() => setModelVal(true)} style={styles.clickMeContainer}>
                     <Text style={styles.clickMeBtn}>Click me!</Text>
                 </TouchableOpacity>
     
                <View>  
                    <Modal
                    animationType="none"
                    transparent={true}
                    visible={ModelVal}
                    onRequestClose={() => setModelVal(false)}
       // onBackdropPress = {() => setModelVal(false)}
                    >
                        <TouchableWithoutFeedback onPress={() => setModelVal(false)}>
                            <View style={styles.modalOverlay} />
                        </TouchableWithoutFeedback>
     
                       <View style={styles.popup}>
                            <Text style={styles.alertText}>Connect "Device" on "Thing"</Text>
                             <Text style={styles.modalText}>
                                Please make sure the 'Device' is physically installed on the 'Thing'. And the 'Device' is on. Press "Continue" to proceed further.
                            </Text>

                            <View style={styles.buttonView}>
                                <TouchableOpacity  style={styles.buttonContainerCon} onPress = {() => {navigation.navigate('Posts')} }>              
                                    <Text style={styles.popContinueBtn}>Continue</Text>            
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => setModelVal(false)} style={styles.buttonContainer}>              
                                     <Text style={styles.popCloseBtn}>Cancel</Text>            
                                 </TouchableOpacity>
                            </View> 
                        </View>          
                    </Modal>
                </View>
      
                    <Text style={styles.searchedResult}>
                        The result you selected is :{selectedValue}
                    </Text>
                         {displayName()}
                <View>
                    <Text >
                         {displayPostData()}
                    </Text>
                 </View>
         </View>    
    </View>    

      </>
    )
}
// {displayUserData(postData, gettingUserVal)}

const styles = StyleSheet.create({

    SearchBar: {
        backgroundColor: '#7c7b7a', 
        height: 50,
        alignSelf: 'stretch',
        padding: 10,
        fontSize: 20,
        borderRadius: 10,
        marginHorizontal: 15,
        textTransform: 'lowercase'
    },
    buttonView: {
        flexDirection: 'row',
        marginTop: 15,
       
    },
    modalOverlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    alertText: {
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 10,
            paddingHorizontal: 10,
    },

    resultText: {
        fontStyle: 'italic',
    },

    clickMeContainer: {
        alignSelf: 'center',
          marginTop: 10,
    },

    clickMeBtn: {
        fontWeight: 'bold',
        fontSize: 14,
        fontStyle: "italic",
        fontFamily: 'Arial',
    },
    modalText: {
        fontWeight: 500,
        fontSize: 12,
        marginBottom: -15,
        color: 'gray',
        paddingHorizontal: 20,
        

    },
    buttonContainer: {
        marginTop: 30,
      //  elevation: 8,
        backgroundColor: "#112766",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15, 
        marginBottom: 2,
       marginLeft: 10,
      },

      buttonContainerCon: {
        marginTop: 30,
       // elevation: 8,
        borderColor: "#112766",
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15, 
        marginBottom: 2,
        borderWidth: 1,
        marginRight: 10,
      },

      popContinueBtn : {
        color: '#112766',
        fontWeight: 'bold',
        borderRadius: 5,
        fontFamily: 'Arial',
        paddingHorizontal: 10,
        
    },

    popCloseBtn : {
        color: 'white',
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 20,
        fontFamily: 'Arial',

        
    },

    popup : {
        alignItems: 'center',
        borderColor: "white",
        justifyContent: 'center',
       // backgroundColor: '#f3f2f0',
       backgroundColor: 'white',
        marginTop: 250,
        width: 300,
        height: 180,
        padding: 1,
        borderRadius: 6,
        marginHorizontal: 35,
      //  borderColor: 'black',
        borderWidth: 1,
    },
  
    Result:{
        
        fontFamily: 'Cochin',
        fontWeight: 'bold',
        marginTop: 15,
       // backgroundColor: '#fff',
        fontSize: 16,
        alignSelf: 'flex-start',
        marginHorizontal:15,
        padding: 5,
       // borderColor: 'black',
       // borderWidth: 0.3,
        color: 'black',
        borderRadius: 3,
        //alignItems: 'center',
        flexWrap: 'wrap',
    },
    SearchContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    titleStyle:{
        padding: 4,
        backgroundColor: 'white',
        margin: 2,
       
        
        },
    searchedResult: {
        marginBottom: 15,
        marginTop: 10,
        alignSelf: 'center'
    },
    key : {
        fontSize:20,
        color: 'blue',
    }

})

export default Search;

/*
    (
            <View style={styles.titleStyle}>
                <Text>
                   {val}
                </Text>
            </View>
        )
*/

/* 
        style={styles.titleStyle}
*/

// {'\n'}

/*  ----Long name filtering function --------
            let postTitleObj;
//function to match the user input to posts api and then to user api to get username
  //  const displayUserData = (postData, gettingUserVal) => {
   //     for(i=0; i<postData.length; i++){
    //        for(j=0; j<gettingUserVal.length; j++){
     //           if(postData[i].title === element){
     //               postTitleObj = postData[i];
     //            const calcValue = gettingUserVal.map((v) => {
      //                  if(postTitleObj.userId === v.id){
       //                     return v.username;
       //                 }
       //             })
       //             const displayValue = calcValue.filter((el) => {
       //                 return el !== undefined
       //             });
        //            return <View>
          //              <Text style={styles.Result}>
         //                 <Text style={styles.key}>Username: </Text><Text style={styles.resultText}>{displayValue}</Text>
          //              </Text>
          //          </View>
          //      }
         //   }
      //  }
// }
*/

/*  ---- post and search item filter long function 

            //let obj;
// function to match the user input with the data set and displaying the result
   //const filterFunction = function x(postData) {
  //  for(i=0; i < postData.length ; i++){

   //     if(postData[i].title === element){
    //        console.log('true')
     //       obj = postData[i];
            
           
       //     return Object.entries(obj).map(([key, val]) => {
       //         return(
        //            <View key={key}>
         //               <Text style={styles.Result} >
         //                   <Text style={styles.key}>{key}
         //                   </Text> : <Text style={styles.resultText}>{val}</Text></Text>
         //           </View>
         //       )
       //     });
      //  }
   // }
  // }
  // const result = filterFunction(postData);

*/

/*  const { id } = val;
            return id; */

            /* modified filter functino
                   const filterPostData = () => postData.filter((val) => {
                    if(val.title === element) {
                    return val;
                    }
    }).map(({title, id, body, userId}) => {
        return(
            <View>
                <Text style={styles.Result}>
                    <Text style={styles.key}>Title</Text> : <Text style={styles.resultText}>{title}</Text>{'\n'}{'\n'}
                    <Text style={styles.key}>Id</Text> : <Text>{id}</Text>{'\n'}{'\n'}
                    <Text style={styles.key}>Body</Text> : <Text>{body}</Text>{'\n'}{'\n'}
                    <Text style={styles.key}>User Id</Text> : <Text>{userId}</Text>{'\n'}{'\n'}
                </Text>
            </View>
    )
});
            */

/*
           const displayName = () => {
            const filteredPostData = postData.filter((el) => {
                      if(el.title === element){
                           return el
                 }
            })
            const mapedPostData = filteredPostData.map((el) => el);        
            const usernameFilter = gettingUserVal.filter((el) => {
                
                        if(mapedPostData[0].userId === el.id){
                   //     console.log(el.username);
                        return el.username;
                 }           
        })
        return(
                <View>
                     <Text style={styles.Result}>
                     <Text style={styles.key}>Username: </Text><Text style={styles.resultText}>{usernameFilter[0].username}</Text>
                    </Text>
                </View>
        )
        
    }
*/