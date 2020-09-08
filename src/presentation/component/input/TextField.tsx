import React from 'react';
import {
  View,
  Image,
  ImageSourcePropType,
  TextInputProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInput,
} from 'react-native';

export interface TextFieldProps {
  containerStyle?: StyleProp<ViewStyle>;

  prefixIcon: ImageSourcePropType;
  suffixIcon?: ImageSourcePropType;
  inputProps?: TextInputProps;
}

export interface TextFieldHandles {
  focus: () => void;
}

const _TextField: React.RefForwardingComponent<
  TextFieldHandles,
  TextFieldProps
> = (props, ref) => {
  const inputRef = React.useRef<TextInput>(null);

  React.useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    };
  });

  const {containerStyle, prefixIcon, suffixIcon, inputProps = {}} = props;

  const renderSuffix = () => {
    if (suffixIcon) {
      return <Image source={suffixIcon} />;
    }
    return null;
  };

  return (
    <View style={[_styles.container, containerStyle]}>
      <View style={{flexDirection: 'row'}}>
        <Image source={prefixIcon} />
        <View style={{width: 16}} />
        <TextInput
          {...inputProps}
          ref={inputRef}
          style={[{flex: 1}, inputProps.style]}
        />
        {renderSuffix()}
      </View>
      <View style={_styles.divider} />
    </View>
  );
};

const _styles = StyleSheet.create({
  container: {},
  divider: {
    height: 1,
    marginTop: 8,
    width: '100%',
    backgroundColor: '#F1F3F8',
    // backgroundColor: 'black'
  },
});

export const TextField = React.forwardRef(_TextField);
