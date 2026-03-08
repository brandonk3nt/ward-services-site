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
              Missionary Meal Signup. The Dana Ranch Ward also has the opportunity to provide meals
              for the Spanish Missionaries from March 15-21 (separate signup at same link).
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
          middle="Now Let Us Rejoice"
          right="3"
          link="https://www.churchofjesuschrist.org/media/music/songs/now-let-us-rejoice?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Upon the Cross of Calvary"
          right="184"
          link="https://www.churchofjesuschrist.org/media/music/songs/upon-the-cross-of-calvary?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Joseph Williams" />
        <LineItem left="Speaker" right="Sandi Anderson" />

        <LineItem
          left="Intermediate Hymn"
          middle="Have I Done Any Good?"
          right="223"
          link="https://www.churchofjesuschrist.org/media/music/songs/have-i-done-any-good?lang=eng"
        />

        <LineItem left="Speaker" right="Kade Thorley" />

        <LineItem
          left="Closing Hymn"
          middle="Prayer is the Soul&apos;s Sincere Desire"
          right="145"
          link="https://www.churchofjesuschrist.org/media/music/songs/prayer-is-the-souls-sincere-desire?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>

      <ServicesFooter />
    </div>
  );
}
