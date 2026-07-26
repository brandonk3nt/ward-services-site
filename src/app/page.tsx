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
        <LineItemLeadership left="Conducting" right="Bishop Shumway" />
        <LineItemLeadership left="Organist" right="Melody Williams" />
        <LineItemLeadership left="Chorister" right="Laurel Cronin" />

        <div className="p-8 my-4 rounded bg-sky-100">
          <div className="text-center">
            <em className="font-semibold text-lg">Announcements</em>
          </div>
          <ol className="list-decimal ml-5 sticky">
            <li className="pt-1">
              Mission Plan, July Operative Practice - "Fast and pray for missionaries worldwide, with a special focus on Elder Smart and Elder Harper who are serving in our ward, and for ourselves as member missionaries."
            </li>
            <li className="pt-1">
              The Ward Pool Party is on August 29 from 4-6 PM at the Brimhall Aquatic Center. Bring a dessert or snack to share.
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
          middle="Rock of Ages"
          right="111"
          link="https://www.churchofjesuschrist.org/media/music/songs/rock-of-ages?lang=eng"
        />
        <LineItem left="Invocation" right="By Invitation" />

        <LineItemBold middle="Ward Business" />

        <LineItem
          left="Sacrament Hymn"
          middle="There Is a Green Hill Far Away"
          right="194"
          link="https://www.churchofjesuschrist.org/media/music/songs/there-is-a-green-hill-far-away?lang=eng"
        />

        <LineItemBold middle="Administration of the Sacrament" />

        {/*
        <LineItemBold middle="Bearing of Testimonies" />
        */}

        <LineItem left="Speaker" right="Trevor Hardy" />
        <LineItem left="Speaker" right="Scott Wininger" />

        <LineItem
          left="Special Musical Number"
          middle="Praise to the Man"
          right="27"
          link="https://www.churchofjesuschrist.org/media/music/songs/praise-to-the-man?lang=eng"
        />

        <LineItem left="Speaker" right="Bennett Andersen" />

        <LineItem
          left="Closing Hymn"
          middle="Sweet is the Work"
          right="147"
          link="https://www.churchofjesuschrist.org/media/music/songs/sweet-is-the-work?lang=eng"
        />

        <LineItem left="Benediction" right="By Invitation" />
      </div>
      <ServicesFooter />
    </div>
  );
}
