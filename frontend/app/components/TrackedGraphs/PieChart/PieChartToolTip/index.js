import { Modal } from "react-native"
import { Tooltip } from '@rneui/themed';

const PieChartToolTip = ({visible, onClose, style, content}) => {


    return (
        <Tooltip 
            withPointer={false}
            containerStyle={style}
            ModalComponent={Modal}
            onClose={onClose}
            visible={visible} 
            popover={content}
        />
    )
}

export default PieChartToolTip