import { Container } from 'components/container.component';
import { HeaderLayout } from 'components/header-layout.component';

import { FruitDetails } from '../components/fruit-details.component';

export default function FruitDetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <Container>
      <HeaderLayout />
      <FruitDetails item={item} />
    </Container>
  );
}
