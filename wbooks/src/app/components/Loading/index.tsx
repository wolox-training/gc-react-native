import React, { ComponentType, FC } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { darkLightBlue } from '../../../constants/colors';

import styles from './styles';

interface WithLoadingProps {
  loading: boolean;
}

function Loading<P extends object>(Component: ComponentType<P>): FC<P & WithLoadingProps> {
  return ({ loading, ...props }: WithLoadingProps) =>
    loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={darkLightBlue} />
      </View>
    ) : (
      <Component {...(props as P)} />
    );
}

export default Loading;
