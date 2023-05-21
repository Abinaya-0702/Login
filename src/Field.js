import React from 'react';
import { TextInput} from 'react-native';

const Field = (props) => {
    return (
        <TextInput {...props} style={{borderRadius:100, color:"#003297", paddingHorizontal:10,
         width:'90%', backgroundColor: "rgb(220,220,220)", marginVertical: 10, fontSize:20}}
         placeholderTextColor={"#003297"}>
        </TextInput>
      );
}

export default Field;