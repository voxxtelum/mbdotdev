import React, { useContext } from 'react';
import { StylesContext } from '@context/Styles';
import '@assets/styles/projects/react-image-zoom.css';

export const Sources = () => {
  const { projects: pro } = useContext(StylesContext);

  return (
    <>
      <div className={pro['project__page_wrapper']}>
        <h4>Data</h4>
        <p>
          Primary data on Metropolitan Statistical Areas was gathered from the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://data.census.gov/cedsci/"
          >
            United States Census Bureau Data Explorer
          </a>{' '}
          using the Census Data API Discovery Tool.
        </p>
        <p>
          Geospatial Data including shapefiles used for area and interstate
          mapping was gathered from the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://geodata.bts.gov/"
          >
            Bureau of Transportation Stasitics Open Data Catalog
          </a>
        </p>
        <p>
          Location data for Micro Center was collected from{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.microcenter.com/"
          >
            Microcenter.com
          </a>
        </p>
        <p>
          Location data for Best Buy was collected using the{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://developer.bestbuy.com/"
          >
            Best Buy Developer API
          </a>
        </p>
        <h4>Tools</h4>
        <p>
          All code was written in{' '}
          <span className={pro.inline__code}>Python</span> or{' '}
          <span className={pro.inline__code}>JavaScript</span>.
        </p>
        <p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.postman.com/"
          >
            Postman
          </a>{' '}
          was used to access APIs. Google Sheets and PostgreSQL were used to
          organize and clean data.
        </p>
        <p>A Jupyter Notebook was used for analysis and organization.</p>
        <p>
          Visualizations and maps were created using Tableau and{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.sketch.com/"
          >
            Sketch
          </a>
        </p>
        All maps were styled using{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.mapbox.com/"
        >
          Mapbox
        </a>{' '}
        and shapefiles were edited with{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.qgis.org/en/site/"
        >
          QGIS
        </a>
        .
      </div>
    </>
  );
};
