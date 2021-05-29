import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

// styles
import globalStyles from '../../styles/GlobalStyles';

// components
import Header from '../../components/header';
import Carousel from '../../components/carousel';

const Home = () => {
  return (
    <View style={styles.root}>
      <Header />
      <ScrollView style={styles.mainContent}>
        <Carousel />
        <Text>
          hjgjhLorem anim consectetur in duis voluptate adipisicing nulla
          consectetur non fugiat dolore laboris incididunt. Irure anim ipsum
          minim duis laborum non nulla. Elit deserunt pariatur tempor voluptate
          ex anim ipsum. Qui aliqua est anim nostrud aliquip cupidatat non aute
          sint est quis consectetur laboris elit. Minim anim reprehenderit ea ex
          nostrud qui pariatur esse ipsum. Ad aliquip consectetur nisi quis amet
          pariatur commodo. Cillum quis ipsum ad sunt velit enim. Voluptate
          veniam deserunt mollit velit eu. Voluptate mollit ullamco exercitation
          eiusmod ea. Elit tempor excepteur reprehenderit irure commodo
          reprehenderit labore ullamco ut qui. Ex deserunt commodo enim ad
          incididunt. Anim exercitation aliquip culpa aliquip velit deserunt sit
          dolore esse cupidatat. Irure id nostrud culpa magna proident consequat
          nisi dolore dolore. Ea amet in incididunt incididunt anim ut
          consectetur laboris aute nostrud. Quis tempor ipsum cupidatat dolore
          est et pariatur ut et. Tempor eiusmod in pariatur qui commodo nostrud
          tempor amet aute. Ea ullamco laboris et eiusmod enim adipisicing irure
          ex esse. Exercitation mollit nostrud esse veniam. Duis est ad proident
          tempor elit dolore proident est magna nisi nostrud elit irure. Magna
          pariatur eiusmod quis sint duis dolor fugiat cillum fugiat aute.
          Commodo duis dolore et sunt est velit velit proident est quis ad. Ea
          occaecat incididunt anim reprehenderit aliqua officia nostrud dolore
          commodo cillum aliquip ad. Labore incididunt culpa occaecat
          reprehenderit anim cillum id enim ea deserunt non sint qui. Irure ea
          minim sit ullamco qui tempor. Fugiat quis dolore nulla officia
          proident adipisicing duis nisi cillum quis enim. Elit adipisicing
          cillum commodo sit ipsum incididunt proident dolore ipsum ut. Proident
          aliquip mollit nulla fugiat tempor. Adipisicing nulla sit adipisicing
          ex ipsum officia esse ipsum elit. Consectetur culpa eiusmod in duis
          magna culpa eiusmod quis nulla fugiat culpa. Nostrud ipsum
          exercitation qui ut elit velit in. Pariatur occaecat aliquip commodo
          proident deserunt voluptate laboris veniam consectetur. Amet aliquip
          incididunt deserunt non duis qui culpa quis aute. Pariatur nisi ut
          ipsum minim enim non commodo minim amet proident irure eiusmod in
          aliqua. Culpa consequat ullamco excepteur magna voluptate incididunt
          ad minim cupidatat. Exercitation sint duis laborum non ullamco
          pariatur non. Ad ut id esse incididunt amet commodo in exercitation
          anim. Nulla irure quis eiusmod aliquip minim dolor. Nulla pariatur
          labore duis ea ea velit commodo laboris pariatur laborum mollit
          cupidatat. Exercitation Lorem fugiat dolore excepteur irure enim
          dolore eu laboris sunt. Cillum exercitation labore sit irure quis
          laboris mollit voluptate non est amet minim. Adipisicing nisi labore
          magna deserunt cillum duis occaecat excepteur. Consequat irure elit
          anim esse voluptate irure dolore. Deserunt in sunt aute sint.
          Consequat dolore enim aute duis adipisicing reprehenderit. Velit do
          pariatur reprehenderit occaecat. Esse dolore aute enim cupidatat
          fugiat cupidatat cillum. Cupidatat sint eu anim quis labore deserunt
          ad in ea est irure aliqua. Labore anim adipisicing do sit elit dolore
          exercitation sint occaecat Lorem ad.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    ...globalStyles.bgBody,
    ...globalStyles.f1,
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 8,
    marginTop: 64,
    marginBottom: 78,
  },
});

export default Home;
