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
        <LineItemLeadership left="Organist" right="Holly Ashby" />
        <LineItemLeadership left="Chorister" right="Laurel Cronin" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              The Dana Ranch Ward is responsible for cleaning the building
              beginning March 7th through the end of May. The cleaning schedule
              is included in the weekly e-mail.
            </li>
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

            {/* This is only for mission prep on 2/22 */}
            <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors will be
              at the Seaman&apos;s home today at 3pm, they will be making pizza.
            </li>

            {/* This is the usual mission prep announcement */}
            {/* <li className="pt-1">
              Mission and Life Skills Prep for all Juniors and Seniors is held
              every 2nd and 4th Sunday at 3pm in the Relief Society room.
            </li> */}
          </ol>
        </div>

        <LineItem
          left="Opening Hymn"
          middle="On This Day of Joy and Gladness"
          right="64"
          link="https://www.churchofjesuschrist.org/media/music/songs/on-this-day-of-joy-and-gladness?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="We'll Sing All Hail to Jesus' Name"
          right="182"
          link="https://www.churchofjesuschrist.org/media/music/songs/we'll-sing-all-hail-to-jesus-name?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Rob Jarvis" />

        <LineItem
          left="Intermediate Hymn"
          middle="I Am A Child of God"
          right="301"
          link="https://www.churchofjesuschrist.org/media/music/songs/i-am-a-child-of-god?lang=eng"
        />

        <LineItem left="Speaker" right="Richard Merkley" />

        <LineItem
          left="Closing Hymn"
          middle="Lead Me Into Life Eternal"
          right="45"
          link="https://www.churchofjesuschrist.org/media/music/songs/lead-me-into-life-eternal?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>

      <ServicesFooter />
    </div>
  );
}
