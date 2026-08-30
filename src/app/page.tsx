import LineItem from "@/components/LineItem";
import LineItemLeadership from "@/components/LineItemLeadership";
import LineItemBold from "@/components/LineItemBold";
import ServicesFooter from "@/components/ServicesFooter";
import ServicesHeader from "@/components/ServicesHeader";

export default function Page() {
  return (
    <div className="w-full h-full">
      <ServicesHeader heroImage="/img/bethseda.jpeg" />
      <div id="services" className="mx-2">
        <LineItemLeadership left="Presiding" right="Bishop Shumway" />
        <LineItemLeadership left="Conducting" right="Will Shoemaker" />
        <LineItemLeadership left="Organist" right="Chris Cooley" />
        <LineItemLeadership left="Chorister" right="Lisa Brandt" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Mission Plan, August Operative Practice - "Arrange to have the missionaries teach a lesson on member missionary work during: Family Home Evenings, Missionary Visits to Members, and/or At Missionary Meal Times."
            </li>
            <li className="pt-1">
              Mesa250 9/11 commemoration on September 12. Donations of books and clothing (infant through adult) are being collected. There are collection boxes at the Cornia, Speakman, and Hakes homes.
            </li>
            <li className="pt-1">
              Ward Choir is right after church from 12:45-1:30. The choir is singing in ward conference on September 13.
            </li>
            <li className="pt-1">
              Daddy-Daughter campout will be on September 18-19.
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
          middle="True to the Faith"
          right="254"
          link="https://www.churchofjesuschrist.org/media/music/songs/true-to-the-faith?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="With Humble Heart"
          right="171"
          link="https://www.churchofjesuschrist.org/media/music/songs/with-humble-heart?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        <LineItem left="Speaker" right="Dolly Huffaker" />
        <LineItem left="Speaker" right="Katy Flaherty" />

        <LineItem
          left="Special Musical Number"
          middle="Redeemer of Israel"
          right="6"
          link="https://www.churchofjesuschrist.org/media/music/songs/redemptor-israel?lang=eng"
        />

        <LineItem left="Speaker" right="Jeremy Hoover" />

        <LineItem
          left="Closing Hymn"
          middle="Carry On"
          right="255"
          link="https://www.churchofjesuschrist.org/media/music/songs/carry-on?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
