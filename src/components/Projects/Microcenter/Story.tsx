import React, { useContext } from 'react';
import { StylesContext } from '@context/Styles';
import { Link } from 'react-router-dom';
import Zoom from 'react-medium-image-zoom';
import '@assets/styles/projects/react-image-zoom.css';

export const Story = () => {
  const { projects: pro } = useContext(StylesContext);

  return (
    <>
      <div className={pro['project__page_wrapper']}>
        <h3>Setting the Stage</h3>
        <p>
          Micro Center is an online and retail store chain that offers computer,
          electronic, networking, and communication devices. They differ from
          their competition in that they carry products that target a much wider
          audience, offering products and services tailored for beginners as
          well as more knowledgeable enthusiasts and experts.
        </p>
        <p>
          Anecdotally, Micro Center is famous for having very competitive
          prices, with the caveat being most of these deals are only found in
          their brick-and-mortar locations. Additionally, they are infamous for
          their few number of stores.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/01-locations.webp"
              alt="Micro Center Locations"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            This is a map of all current Micro Center locations.
          </div>
        </div>
        <p>
          Recently, I have been thinking a lot about moving to a new area and
          considering aspects of places I&apos;ve lived previously that I
          missed. One of those was being close to a Micro Center, which led me
          to ask,{' '}
          <em>
            which locations would be most suitable for a possible new expansion
            of Micro Center?
          </em>
        </p>
        <p>
          The key stakeholders in this scenario are Micro Center themselves. Any
          possible expansion would have to consider a multitude of factors to
          ensure a new location would have the greatest chance to succeed. In my
          initial research, I identified six considerations a retail store might
          take before making a final decision.
        </p>
        <ul>
          <li>
            <span className={pro['project__inline_em']}>Accessibility</span>
            How easy is it to accept deliveries? How easy is it for your
            customers and staff to get there?
          </li>
          <li>
            <span className={pro['project__inline_em']}>Costs</span>
            What are the costs associated with each location, such as taxes,
            property values, infrastructure, and additional costs associated
            with growing the supply chain?
          </li>
          <li>
            <span className={pro['project__inline_em']}>Competition</span>
            Who are the major competitors and what is their presence like in
            each location?
          </li>
          <li>
            <span className={pro['project__inline_em']}>Demographics</span>
            Who is your target demographic and how can you categorize them? How
            does each potential location compare to areas where you are
            successful demographically?
          </li>
          <li>
            <span className={pro['project__inline_em']}>Security</span>
            How are crime rates in each potential area?
          </li>
          <li>
            <span className={pro['project__inline_em']}>
              Potential for Growth
            </span>
            How are demographics and industry trending, both locally and more
            broadly?
          </li>
        </ul>
        <p>
          This analysis will primarily focus on the demographic similarities
          between the Metropolitan Statistical Areas of the United States as
          defined by the US Census Bureau. I believe this approach will be best
          for narrowing down the potential areas.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/02-locations-by-metro-area.webp"
              alt="Micro Center Locations with All Metropolitan Statistical Areas"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Micro Center Locations with All Metropolitan Statistical Areas
          </div>
        </div>
        <h3>Preparing and Processing the Data for Analysis</h3>
        <p>
          Most of the data will be collected from the US Census Bureau. They
          have hundreds of datasets, profiles, and supplementary data formatted
          in tables by any metric, and by using their API and documentation, I
          was able to download only the variables I needed from the American
          Community Surveys, 5-year estimates from 2019 and 2020, and the Data
          Profiles, 5-year estimates from the same years. More recent data
          exists, but are only 1-year estimates, so they tend to have a higher
          margin of error and are less accurate.
        </p>
        <p>
          For this analysis, I felt confident in my assessment that Micro
          Center&apos;s target demographic was primarily educated, tech-savvy,
          males, aged 20-34, and with some disposable income. The data I
          gathered from the Census Bureau includes age, sex, occupation,
          industry, geographical mobility, income status, and a few others.
        </p>
        <p>
          The raw data was sorted and condensed initially using Google Sheets
          before being added to a local PostgreSQL database for final integrity
          checks, cleaning, and joining together. Other datasets I used for
          supplemental analysis, such as general Metropolitan Area and County
          data were processed similarly.
        </p>
        <h3>Primary Analysis</h3>
        <p>
          Once I was comfortable with the format of my data, I downloaded it as
          a CSV and imported it into a Jupyter Notebook. The majority of all
          calculations and programming were done using Python. This could have
          been done in R, but I chose Python simply because I was in the mood to
          use it.
        </p>
        <aside>
          You can see a complete view of all of the code I used{' '}
          <Link to="/projects/microcenter/code">here.</Link>
        </aside>
        <p>
          I began with creating pandas data frames with the cleaned data in
          order to perform a Dimension Reduction using Principal Component
          Analysis (PCA). This involves standardizing the column values by
          scaling them to have a mean of 0 and standard deviation of 1,
          calculating the Kaiser-Meyer-Olkin (KMO) criterion to determine
          sampling adequacy, then finally performing the PCA.
        </p>
        <p>
          I reduced the initial metrics to two Principal Components, which are
          new variables constructed as linear combinations of the initial
          metrics. The advantage of this reduction is twofold-- first, it allows
          you to visualize the data in a two-dimensional space, and second, each
          component retains all of the original metrics, so nothing is lost.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/charts/01-cumulative-variance.webp"
              alt="cumulative variance by principal components"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Fig. 1 This chart shows the cumulative explained variance of all 15
            principal components. In my analysis I ended up using two components
          </div>
        </div>
        <p>
          After reduction, I trained the model to the 2019 dataset using binary
          indicators of whether or not the Metro Area had a store as the target
          values. This was completed with a decision tree. I contemplated using
          a random forest, but my sample size was rather small and I felt the
          decision tree was adequate.
        </p>
        <p>
          The model was then fit to the 2020 dataset in order to predict, or
          find Metro Areas most similar demographically to the 2019 store
          locations, and found 39 similar locations from 384 Metro Areas.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/03-predictions.webp"
              alt="Micro Center Model Predictions"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            This map shows all of the Micro Center model predictions.
          </div>
        </div>
        <h3>Further Analysis</h3>
        <p>
          At this point, I took a step back and looked at the map of the
          locations of the current stores again. Micro Center is headquartered
          near Columbus, OH, it made sense that locations looked as though they
          were spreading from Ohio outwards. I thought, there were a lot of
          stores along Interstates 70 and 95, which led me to look at the stores
          on a map with the major interstates.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/04-locations-by-major-interstates.webp"
              alt="Micro Center Locations by Major Interstates"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            This map shows all of the Micro Center locations and outlines of
            major US interstates.
          </div>
        </div>
        <p>
          From a business perspective, it would make sense to expand along these
          major trade routes in order to simplify the supply chain, especially
          when the number of locations you have is relatively low. Conversely,
          you can make an argument that the Interstate Highway System was
          planned partly to connect these Metropolitan Areas, therefore if you
          are wanting to increase your chances of a successful expansion,
          targeting locations with large populations would naturally fall along
          these interstates.
        </p>
        <p>
          Nevertheless, I continued and mapped the predicted locations on the
          map with the interstates as well. While many of the predicted
          locations were along one of these interstates, there were a few that
          did not and this was something I considered later.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/05-predictions-by-current-and-major-interstates.webp"
              alt="Micro Center Predictions and Current Locations by Major Interstates"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Micro Center Predictions and Current Locations by Major Interstates.
          </div>
        </div>
        <p>
          I wanted to revisit another of the six criteria and look at
          competitors within each area. First, I identified Best Buy as the
          largest brick-and-mortar retailer. Next, I found the zip code of each
          predicted location as near to the center as possible and then used
          Best Buy&apos;s Store API to find all big box stores within 25 miles
          of each zip code. I did not know which way to interpret this data, and
          my intuition was telling me that the number of stores was too strongly
          correlated with population, and the presence or absence of Best Buy
          locations wasn&apos;t a strong indicator of if a market is saturated
          or potentially untapped. Regardless, here is the data.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/charts/04-competitors.webp"
              alt="Number of nearby competitors of each predicted location"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Number of nearby competitors of each predicted location.
          </div>
        </div>
        <p>
          I revisited the interstate map at this point and started thinking
          about eliminating locations. The first thing I noticed was that many
          predictions were nearby existing stores and I found driving times
          between current and predicted locations on Google Maps. What I found
          was that many predictions were within 1.5-2 hours of current stores. I
          eliminated these predictions, notably the ones in Ohio, Indiana,
          Kentucky, and Pennsylvania, based on these criteria. My line of
          thought was that these predicted locations would cover potentially
          fewer people, as they would eat into areas that may already be covered
          by stores.
        </p>
        <p>
          Using these same criteria of driving time between points, I looked at
          the remaining predictions that were near major interstates and found
          the largest metro areas within 1.5-2 hours of each prediction. I
          calculated the total population of the combined areas.
        </p>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/charts/06-populations.webp"
              alt="Total Population of Metropolitan Areas Near Predictions"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Total population of predictions and Metropolitan Areas near
            predictions.
          </div>
        </div>
        <h3>Thoughts</h3>
        <p>
          Los Angeles definitely stands out, as it is the largest Metropolitan
          Area in the US without multiple locations; New York City, Chicago, and
          Atlanta all currently have more than one store. However, I was more
          interested in finding new areas, and the top three ended up being
          Miami, FL, Greensboro, NC, and Phoenix, AZ.
        </p>
        <p>
          Miami and Phoenix are not surprising to see as they are both massively
          populated areas. However, Greensboro gains a large advantage from
          being in so close proximity to Charlotte and the entire{' '}
          <a
            href="https://en.wikipedia.org/wiki/Research_Triangle_Park"
            target="_blank"
            rel="noopener noreferrer"
          >
            Research Triangle Park
          </a>
          . Both of these areas are growing, getting younger, and are home to
          many universities. Greensboro also has a more favorable position,
          sitting on Interstates 40 and 85, and nearly halfway between Atlanta
          and Washington D.C.-- both metros with multiple locations.
        </p>
        <p>
          Notably absent are areas along the west coast, such as San Francisco,
          Portland, and Seattle. Each of these areas was a location that I
          expected to see initially. Additionally, there were three locations in
          California that were not San Francisco. My opinion is that if Micro
          Center were to consider adding another location in California, it
          would be a tough decision between Los Angeles and San Francisco. While
          the entire L.A. Metro has over 17 Million people, a new store would
          only be capturing some percentage of that area. For reference, a new
          location in San Francisco would cover an area of over 9 Million people
          within a 1.5-hour drive.
        </p>
        <h3>Conclusion</h3>
        <p>
          I would love to revisit my initial analysis with more information. It
          would be very interesting to see data that only exists internally at
          Micro Center, notably how profitable each store is and where or how
          far customers are coming from. I would also like to use more current
          data, probably more demographic metrics, and possibly look at trends
          over a few years span to try to identify locations that will be
          emerging in the future. I could also compare the estimated costs,
          accessibility, and security of each location.
        </p>
        <p>
          Without knowing all the information that Micro Center knows
          internally, it would be extremely difficult to say for certain which
          area is the most suitable. However, given this analysis of the data
          that I have available, its position along major interstates, and its
          proximity to similar Metro Areas, I have to say that if Micro Center
          were to build a store in 2023, Greensboro, NC, is the first place I
          would suggest.
        </p>
      </div>
    </>
  );
};
