import { View, Text, ViewProps } from 'react-native';
import { styles } from './styles';

interface HeadingProps extends ViewProps {
    title: string,
    subtitle: string
}

export function Heading({title, subtitle, ...rest}: HeadingProps) {
  return (
    <View style={styles.container}>
        <Text style={styles.title} {...rest}>
            {title}
        </Text>
        <Text style={styles.subtitle}>
            {subtitle}
        </Text>
    </View>
  );
}