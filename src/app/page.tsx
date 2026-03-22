import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/palm-sunday.jpeg" />

      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Joe Capps" />
        <LineItemLeadership left="Organist" right="Chris Cooley" />
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
              Ward Choir Practice is at 12:45 at the Edgewood Building.
            </li>
            <li className="pt-1">
              Easter Egg Hunt and activity on March 28 at 8 AM at Countryside
              Park.
            </li>
            <li className="pt-1">
              Missionary Meal Signup. (
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
          middle="Rejoice The Lord Is King"
          right="66"
          link="https://www.churchofjesuschrist.org/media/music/songs/rejoice-the-lord-is-king?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="While of These Emblems We Partake"
          right="174"
          link="https://www.churchofjesuschrist.org/media/music/songs/while-of-these-emblems-we-partake?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Tegan Grenko" />
        <LineItem left="Speaker" right="Sasha Anderson" />

        <LineItem
          left="Special Musical Number"
          middle="I Heard Him Come"
          right="Elder Hoover, Holly Ashby"
        />

        <LineItem left="Speaker" right="Tyler Cornia" />

        <LineItem
          left="Closing Hymn"
          middle="As I Search the Holy Scriptures"
          right="277"
          link="https://www.churchofjesuschrist.org/media/music/songs/as-i-search-the-holy-scriptures?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>

      <ServicesFooter />
    </div>
  );
}
