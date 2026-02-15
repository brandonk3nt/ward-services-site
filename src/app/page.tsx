import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/bible_films_christ_walking_disciples.jpeg" />

      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Will Shoemaker" />
        <LineItemLeadership left="Organist" right="Melody Williams" />
        <LineItemLeadership left="Chorister" right="Julie Clement" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Ward choir practice is every Sunday at 12:45 at the Edgewood
              Building.
            </li>
            <li className="pt-1">
              Missionary Meal Signup. Online signup is preferred, or see the
              backup signup to be passed around during second hour. (
              <a
                href="https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-57457318-missionary#/"
                className="text-sky-600 hover:text-sky-800 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up here
              </a>
              )
            </li>
            <li className="pt-1">
              Bishop&apos;s Hang Out: Cereal Sunday. All priests and young women
              class 16-18 are invited to the Shumway&apos;s home on the third
              Sunday of each month from 7:00-8:30 pm.
            </li>
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li>
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="Scatter Sunshine"
          right="230"
          link="https://www.churchofjesuschrist.org/media/music/songs/scatter-sunshine?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="How Great The Wisdom and the Love"
          right="195"
          link="https://www.churchofjesuschrist.org/media/music/songs/how-great-the-wisdom-and-the-love?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Logan Downs" />
        <LineItem left="Speaker" right="Eric Huffaker" />

        <LineItem
          left="Intermediate Hymn"
          middle="We'll Bring the World His Truth"
          right="Young Men/Young Women"
          link="https://www.churchofjesuschrist.org/media/music/songs/we'll-bring-the-world-his-truth?lang=eng"
        />

        <LineItem left="Speaker" right="Damario Gough" />

        <LineItem
          left="Closing Hymn"
          middle="Our Savior's Love"
          right="113"
          link="https://www.churchofjesuschrist.org/media/music/songs/our-saviors-love?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>

      <ServicesFooter />
    </div>
  );
}
