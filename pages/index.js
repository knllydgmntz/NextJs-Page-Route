import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/358061930_660398556110832_8522231917712244308_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHblt9XvrLlQjfVrFSz9QF52qiAeo6yNE_aqIB6jrI0T_7hdrbsvYY0VCmNL2mZsfs13amKiYtcmjQlBwOeO8oD&_nc_ohc=jiN7taU5UHIAX-XT6OX&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfASnlM9IwBQDa_7597eLdA-MlDSCOnwqq-dM7NIVXN1fg&oe=65F9688B",
    address: "Alleyway Digos City",
    description: "This is alleyway!",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://scontent.fmnl3-1.fna.fbcdn.net/v/t39.30808-6/252931490_125609656533638_4858984930802410221_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGObojGhxHlDNBC_e_tSIxb5csI4pMR__blywjikxH_9gAe-w90Tng-vwyjFD6NWpwQ2htkJV6LyqakVwy_3YFv&_nc_ohc=KzKlvD3R1k0AX9qiHNe&_nc_oc=AQl6-1xO4OoSc_r81eAuyU8UeHqZZEvIdpgZnknRWbjsmPBNmL9tY73HjGLIyXzhcDg&_nc_ht=scontent.fmnl3-1.fna&oh=00_AfCgidKu9CSPdek9tTqjltHC5JQSUn_eBtsmjn9RCZkJFQ&oe=65FA5D70",
    address: "Foodbox",
    description: "This is a foodbox!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps() {
  // fetch data form an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
