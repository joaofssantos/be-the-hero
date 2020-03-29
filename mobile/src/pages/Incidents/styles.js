import {StyleSheet} from 'react-native';

import Constants from 'expo-constants';

export default StyleSheet.create({

        container: {    
            flex:1,
            paddingHorizontal: 24,
            paddingTop: Constants.statusBarHeight + 20,
        },
        header: {
            flexDirection: "row",
            justifyContent: 'space-between',
            alignItems: 'center',
        },
        headerText: {
            fontSize: 15,
            color: "#737380",

        },
        headerTextBold:{
            fontWeight: '700',
        },
        subHeader:{marginTop:48,marginBottom:32,},
        subHeaderTitle:{fontSize:30,marginBottom: 16,color:"#13131a", fontWeight: '700',},
        subHeaderDescription:{fontSize:16,lineHeight:24,color:"#737380"},
      
        incident:{padding:24, borderRadius:8, backgroundColor:'#fff',marginBottom:16},
        incidentProperty:{fontSize:14, color:'#41414d', fontWeight: '700'},
        incidentPropertyValue:{marginTop:8, fontSize: 15, marginBottom:24, color: '#737380',},
        
        detailsButton:{flexDirection: 'row',justifyContent:'space-between', alignItems:'center',},
        detailsButtonText:{color: '#e02041',fontSize:15, fontWeight:'700',},

        
}) 