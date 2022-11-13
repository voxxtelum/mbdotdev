import { StylesContext } from '@context/Styles';
import React, { useContext } from 'react';
import Zoom from 'react-medium-image-zoom';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import '@assets/styles/projects/react-image-zoom.css';

SyntaxHighlighter.registerLanguage('python', python);

export const Code = () => {
  const { projects: pro } = useContext(StylesContext);

  const theme = materialDark;
  const codeProps = {
    style: {
      fontFamily: 'Fira Code, monospace',
      fontSize: 'var(--fs-xs)',
      borderRadius: '2px',
    },
  };

  const code1 = `import pandas as pd
import numpy as np
import requests
import json
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.preprocessing import StandardScaler`;
  const code2 = `stores_df_2019 = pd.read_csv('../data/combined_2019_stores_flat.csv')
stores_df_2020 = pd.read_csv('../data/combined_2020.csv')

stores_df_2019.tail(3)`;
  const code3 = `micro_metros = stores_df_2019['METRO'].values
micro_targets_2019 = stores_df_2019['stores'].values`;
  const code4 = `micro_training_values_2019 = stores_df_2019.iloc[:, 1:]

micro_training_values_2019 = micro_training_values_2019.iloc[:, :-1]`;

  const code5 = `X = StandardScaler().fit_transform(micro_training_values_2019)`;

  const code6 = `from factor_analyzer.factor_analyzer import calculate_kmo
kmo_vars, kmo_model = calculate_kmo(X)
print(f'KMO of each variable: {kmo_vars}')
print(f'KMO of entire dataset: {kmo_model}')`;

  const code7 = `feature_cols = ['Feature '+str(i + 1) for i in range(X.shape[1])]
normal_values = pd.DataFrame(X, columns=feature_cols)`;

  const code8 = `from sklearn.decomposition import PCA

pca = PCA()
pca_features = pca.fit_transform(X)

pc_list = ['PC'+str(i) for i in list(range(1, len(pca_features[0]) + 1))]

pca_df = pd.DataFrame(data=pca_features, columns=pc_list)`;

  const code9 = `evra = pca.explained_variance_ratio_
print(f'Explained variance for each Principal Component:', evra)
print(f'Total explained variance: {round(100 * np.sum(evra), 2)}%')`;

  const code10 = `sns.set()

plt.plot(
    np.cumsum(pca.explained_variance_ratio_)
)
plt.axhline(y=0.8, color='r', linestyle='-')

plt.title('Cumulative Variance Explained by Principal Components')

plt.show()`;

  const code11 = `sns.set()

plt.plot(pca.explained_variance_ratio_)
plt.title('Variance Explained by Principal Components')

plt.show()`;

  const code12 = `pcax = PCA(n_components=2)
pcax_features = pcax.fit_transform(X)

pcx_list = ['PC'+str(i) for i in list(range(1, len(pcax_features[0]) + 1))]

pcax_df = pd.DataFrame(data=pcax_features, columns=pcx_list)`;

  const code13 = `evr = pcax.explained_variance_ratio_
print(f'Explained variance for each Principal Component', evr)
print(f'Total explained variance: {round(100 * np.sum(evr), 2)}%')`;

  const code14 = `# Principal components correlation coefficients
loadings = pcax.components_
# Principal Components before reductions
number_pcs = pcax.n_features_
# Feature names before PCA
feature_names = micro_training_values_2019.columns.values

# pcx_list

# Zip pcx_list with loadings
pcx_loadings = dict(zip(pcx_list, loadings))

pcx_loadings_df = pd.DataFrame.from_dict(pcx_loadings)

pcx_loadings_df['features'] = feature_names

pcx_loadings_df = pcx_loadings_df.set_index('features')`;

  const code15 = `# Heatmap
pcx_heatmap = sns.heatmap(pcx_loadings_df, annot=True, cmap='Spectral')
plt.show()`;

  const code16 = `from sklearn import tree

classifier = tree.DecisionTreeClassifier()

classifier.fit(pcax_features, micro_targets_2019)`;

  const code17 = `micro_test_values_2020 = stores_df_2020.iloc[:, 1:-1]

micro_test_values_2020_transformed = pcax.fit_transform(micro_test_values_2020)

predictions_2020 = classifier.predict(micro_test_values_2020_transformed)

print(predictions_2020, len(predictions_2020), np.count_nonzero(predictions_2020))`;

  const code18 = `import API_KEYS
import time

BBY_API_KEY = API_KEYS.BBY_API_KEY

results_2020_nearby_df = pd.read_csv('../data/predictions_2020_unique.csv')

zip_codes = results_2020_nearby_df['zip'].to_numpy()

def find_nearby_locations(zip_codes, radius):
  nearby_counts = []

  for code in zip_codes:
    url = f'https://api.bestbuy.com/v1/stores(area({code},{radius})&storeType=%22Big%20Box%22)?format=json&show=storeType,name,lat,lng,city,region&apiKey={BBY_API_KEY}'
    
    response = requests.get(url)
    res_locations = json.loads(response.text)
    
    if res_locations['total']:
      nearby_counts.append(res_locations['total'])
    else: 
      nearby_counts.append('0')

    time.sleep(1.5)
    
  return nearby_counts

number_locations = find_nearby_locations(zip_codes, 25)`;

  return (
    <>
      <div
        className={`${pro['project__page_wrapper']} ${pro['project__page_wrapper_code']}`}
      >
        <h4>Imports</h4>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code1}
        </SyntaxHighlighter>
        <h4>Grab CSV files</h4>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code2}
        </SyntaxHighlighter>
        <h4>Preaparing Dataframes</h4>
        <p>
          First I want to create arrays with the metro names and the targets
          (whether or not the metro has a location already)
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code3}
        </SyntaxHighlighter>
        <p>
          Preparing the dataframe with training values by removing the first and
          last columns
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code4}
        </SyntaxHighlighter>
        <h4>Prepare for Dimension Reduction using PCA</h4>
        <p>Standardize and scale all the values</p>
        <p>
          PCA is affected by the scale of the values, so to begin I will use
          StandardScaler to standardize each value. This creates a new set of
          values which are normally distributed and has a mean of 0 and standard
          deviation of 1.
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code5}
        </SyntaxHighlighter>
        <h4>Calculate the Kaiser-Meyer-Olkin criterion sampling adequacy</h4>
        <p>{`This statistic represents the degree to which each observed variable is predicted, without error, by the other variables in the dataset. It meastures the adequacy for each variable as well as the entire dataset. In general, a KMO < 0.6 is considered inadequate.`}</p>
        <p>
          The model KMO was calculated as 0.81 which the data is suitable for
          Factor Analysis.
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code6}
        </SyntaxHighlighter>
        <div className={pro['project__code_output']}>
          {`KMO of each variable: [0.85246624 0.84155474 0.71454736 0.55774896
          0.73646084 0.78117795 0.8581839 0.90662081 0.68132139 0.78588415
          0.65855889 0.85220726 0.88463483 0.77966191 0.82721856]
          KMO of entire dataset: 0.8068663936606472`}
        </div>
        <p>
          This is just a dataframe showing the scaled values for each feature.
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code7}
        </SyntaxHighlighter>
        <h3>Dimension Reduction using Principal Component Analysis</h3>
        <p>
          First I perform the PCA with the maximum number of Principal
          Components to view the total and cumulative variance of each one.
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code8}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code9}
        </SyntaxHighlighter>
        <div className={pro['project__code_output']}>
          {`Explained variaton for each Principal Component: 
[0.40673389 0.17806315 0.12303406 0.08930106 0.06311503 0.03928666
 0.02761505 0.01792439 0.01288576 0.01272692 0.01050957 0.00929052
 0.00612432 0.00252688 0.00086275]
Total explained variation: 100.0%`}
        </div>
        <p>Cumulative Variance Chart</p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code10}
        </SyntaxHighlighter>
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
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code11}
        </SyntaxHighlighter>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/charts/02-eigenvalues.webp"
              alt="Variance Explained by Principal Components"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Fig. 2 The eigenvalues of each Principal Component show the amount
            of variance explained by each Principal Component
          </div>
          <h4>Dimension Reduction</h4>
          <p>
            There are a few methods of determining how many components to build
            the model with, but here I am reducing down to 2 Principal
            Components.
          </p>
        </div>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code12}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code13}
        </SyntaxHighlighter>
        <div className={pro['project__code_output']}>
          {`Explained variaton for each Principal Component [0.40673389 0.17806315]
Total explained variation: 58.48%`}
        </div>
        <p>
          Finding the loadings, or the effects each Principal Component has on
          each feature.
        </p>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code14}
        </SyntaxHighlighter>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code15}
        </SyntaxHighlighter>
        <div className={pro['project__image']}>
          <Zoom>
            <img
              src="/images/projects/microcenter/charts/03-heatmap.webp"
              alt="Effects of Variables on Each Primary Component"
            />
          </Zoom>
          <div className={pro['project__image_caption']}>
            Fig. 3 Heatmap showing the effects of each variable on the Principal
            Components.
          </div>
        </div>
        <h4>Fit Features and Targets to a Decision Tree Classifier</h4>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code16}
        </SyntaxHighlighter>
        <h4>Finding the Predictions</h4>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          codeTagProps={codeProps}
        >
          {code17}
        </SyntaxHighlighter>
        <h4>Finding the Nearby Competitors to each Prediction</h4>
        <SyntaxHighlighter
          language="python"
          style={theme}
          showLineNumbers={true}
          wrapLines={true}
          wrapLongLines={true}
          codeTagProps={codeProps}
        >
          {code18}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
