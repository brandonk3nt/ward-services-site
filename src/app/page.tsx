import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/christmas-star.jpg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Will Shoemaker" />
        <LineItemLeadership left="Organist" right="Chris Cooley" />
        <LineItemLeadership left="Chorister" right="Steven Ray" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Love Share Invite, November Operative Practice - "Arrange to have the missionaries teach a lesson on member missionary work during: Family Home Evenings, Missionary Visits to Members, and/or At Missionary Meal Times."
            </li>
            <li className="pt-1">
              Missionary Meal Signup. (
              <a
                href="https://www.signupgenius.com/go/10C0F4FADAE2DA7F5CE9-64697089-missionary#/"
                className="text-sky-600 hover:text-sky-800 underline break-words"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign up here
              </a>
              ). Double check for current food allergies.
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
          middle="Hark the Herald Angels Sing"
          right="209"
          link="https://www.churchofjesuschrist.org/media/music/songs/hark-the-herald-angels-sing?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="Again We Meet Around the Board"
          right="186"
          link="https://www.churchofjesuschrist.org/media/music/songs/again-we-meet-around-the-board?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimony" />
        */}

        <LineItem left="Speaker" right="" />
        <LineItem left="Speaker" right="" />

        <LineItem
          left="Intermediate Hymn"
          middle="Cmoe, Thou Fount of Every Blessing"
          right="Choir"
        />

        <LineItem left="Speaker" right="Maggie Clifford" />

        <LineItem
          left="Closing Hymn"
          middle="While Shepherds Watched Their Flocks by Night"
          right="211"
          link="https://www.churchofjesuschrist.org/media/music/songs/while-shepherds-watched-their-flocks-by-night?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
