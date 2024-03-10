import { Modal, View } from "react-native"
import { Tooltip, Text } from '@rneui/themed';
import styles from "./styles";

const PieChartToolTip = ({visible, onClose, myStyle, content}) => {


    return (
        <Tooltip 
            withPointer={false}
            containerStyle={myStyle}
            onClose={onClose}
            visible={visible} 
            width={230}
            popover={content
            }
        />
    )
}

export default PieChartToolTip