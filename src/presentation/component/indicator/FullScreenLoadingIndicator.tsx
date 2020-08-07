import React from 'react'
import { Modal, ActivityIndicator, View } from 'react-native'

export interface FullScreenLoadingIndicatorProps {
    visible: boolean
}

const _FullScreenLoadingIndicator: React.FC<FullScreenLoadingIndicatorProps> = (props) => {
    return (
        <Modal
            visible={props.visible}
            transparent
        >
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(51,51,51,0.3)',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <ActivityIndicator
                    color='red'
                    size='large'
                />
            </View>
        </Modal>
    )
}

export const FullScreenLoadingIndicator = React.memo(_FullScreenLoadingIndicator)