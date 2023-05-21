import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native';

export default function Button({bgColor, btnLabel, textColor})
{
    return (
        <TouchableOpacity style={{backgroundColor:bgColor, borderRadius:100, flex:1, flexDirection:'column-reverse',
         justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:textColor, fontSize:30, fontWeight:'bold'}}>
                {btnLabel}
            </Text>
        </TouchableOpacity>
      );
}
