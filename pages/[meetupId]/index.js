import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/358061930_660398556110832_8522231917712244308_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHblt9XvrLlQjfVrFSz9QF52qiAeo6yNE_aqIB6jrI0T_7hdrbsvYY0VCmNL2mZsfs13amKiYtcmjQlBwOeO8oD&_nc_ohc=jiN7taU5UHIAX-XT6OX&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfASnlM9IwBQDa_7597eLdA-MlDSCOnwqq-dM7NIVXN1fg&oe=65F9688B"
      title="First Meet up"
      address="The Alleyway Place"
      description="This is a first meetup"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/358061930_660398556110832_8522231917712244308_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHblt9XvrLlQjfVrFSz9QF52qiAeo6yNE_aqIB6jrI0T_7hdrbsvYY0VCmNL2mZsfs13amKiYtcmjQlBwOeO8oD&_nc_ohc=jiN7taU5UHIAX-XT6OX&_nc_ht=scontent.fmnl3-4.fna&oh=00_AfASnlM9IwBQDa_7597eLdA-MlDSCOnwqq-dM7NIVXN1fg&oe=65F9688B",
        id: meetupId,
        title: "First Meet up",
        address: "The Alleyway Place",
        description: "This is a first meetup",
      },
    },
  };
}

export default MeetupDetails;
