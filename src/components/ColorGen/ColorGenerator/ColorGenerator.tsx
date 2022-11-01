import React, { useState, useEffect, useCallback } from 'react';

import '@assets/styles/colorgen/colorgen.css';

import ColorGenHeader from '../ColorGenHeader';

import { Colord, colord, getFormat, random } from 'colord';
import { Format } from 'colord/types';

const ColorGenerator = () => {
  interface FormValues {
    colorHex?: string;
    colorName?: string;
    colorIterations?: number;
    colorStrength?: number;
    colorLighten?: boolean;
    formError?: boolean;
    [key: string]: string | number | boolean | undefined;
  }

  interface ColorScheme {
    colorScheme?: string | number | boolean | undefined;
    colorBG?: string;
    colorText?: string;
    error?: string;
  }

  const [formValues, setFormValues] = useState<FormValues[]>([
    {
      colorHex: '#fddd72',
      colorName: 'one',
      colorIterations: 5,
      colorStrength: 0.05,
      colorLighten: false,
    },
    {
      colorHex: '#0ac2ff',
      colorName: 'two',
      colorIterations: 5,
      colorStrength: 0.05,
      colorLighten: false,
    },
  ]);

  const [colorScheme, setColorScheme] = useState<ColorScheme[]>([
    {
      colorScheme: '',
      error: '',
    },
  ]);

  const [colorLen, setColorLen] = useState(2);

  const generateColorSchemeOutput = useCallback(
    (colorValues: FormValues[]): ColorScheme[] => {
      const colorSchemeOutput: ColorScheme[] = [];
      colorValues.forEach((row) => {
        if (!row.colorHex) {
          colorSchemeOutput.push({
            colorScheme: '',
            error: `Add a valid Hex color to begin.`,
          });
        }

        if (row.colorHex) {
          const colorFormat = getFormat(row.colorHex.trim()) as Format;

          if (colorFormat !== 'hex') {
            colorSchemeOutput.push({
              colorScheme: '',
              error: `Color is not a valid Hex.`,
            });
          }

          if (colorFormat === 'hex') {
            const value = row.colorHex.trim();
            const name = row.colorName?.trim() || value;
            const iterations = row.colorIterations || 5;
            const strength = row.colorStrength || 0.05;
            const lighten = row.colorLighten || false;

            colorSchemeOutput.push({
              colorScheme: `// ${name} - ${value.toUpperCase()} iterations:${iterations} strength:${strength} lighten:${lighten}`,
              error: '',
            });

            for (let i = 0; i < iterations; i++) {
              let colorBG: Colord;
              let colorText = '';

              if (lighten === true) {
                colorBG = colord(value).lighten(i * strength);
              } else {
                colorBG = colord(value).darken(i * strength);
              }

              const colorShade: string = colorBG.toHslString();
              const colorString = `--${name}-${i + 1}: ${colorShade};`;

              if (colorBG.isLight()) {
                colorText = '#000000';
              }

              colorSchemeOutput.push({
                colorScheme: colorString,
                colorBG: colorBG.toHex(),
                colorText: colorText,
                error: '',
              });
            }
            colorSchemeOutput.push({
              colorScheme: ' ',
              error: '',
            });
          }
        }
      });
      return colorSchemeOutput;
    },
    []
  );

  useEffect(() => {
    const colorSchemeOutput = generateColorSchemeOutput(formValues);
    setColorScheme(colorSchemeOutput);
  }, [generateColorSchemeOutput, formValues]);

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormValues = [...formValues];

    newFormValues[index][e.target.name] = e.target.value;
    setFormValues(newFormValues);

    const colorSchemeOutput = generateColorSchemeOutput(newFormValues);
    setColorScheme(colorSchemeOutput);
  };

  const handleCheckChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newFormValues = [...formValues];

    newFormValues[index][e.target.name] = e.target.checked;
    setFormValues(newFormValues);

    const colorSchemeOutput = generateColorSchemeOutput(newFormValues);
    setColorScheme(colorSchemeOutput);
  };

  const addNewColor = () => {
    const newColor = random().toHex();
    const newFormValues = [
      ...formValues,
      {
        colorHex: newColor,
        colorName: '',
        colorIterations: 5,
        colorStrength: 0.05,
      },
    ];
    setFormValues(newFormValues);
    const colorSchemeOutput = generateColorSchemeOutput(newFormValues);
    setColorScheme(colorSchemeOutput);

    setColorLen(newFormValues.length);
  };

  const removeColorRow = (index: number) => {
    const newFormValues = [...formValues];
    newFormValues.splice(index, 1);
    setFormValues(newFormValues);
    const colorSchemeOutput = generateColorSchemeOutput(newFormValues);
    setColorScheme(colorSchemeOutput);
    setColorLen(newFormValues.length);
  };

  return (
    <>
      <div className="color-generator ar-mono">
        <form className="color-form" autoComplete="off">
          <ColorGenHeader title="COLORGEN" />
          <div className="color-form___input">
            {formValues.map((element, index) => {
              return (
                <div
                  className="color-form___inline swing-in-top-fwd"
                  key={index}
                >
                  <div className="color-form___cell">
                    <input
                      type="color"
                      name="colorHex"
                      value={element.colorHex || ''}
                      onChange={(e) => handleChange(index, e)}
                      size={12}
                      title="color value"
                    ></input>
                    <label htmlFor="colorHex">Color</label>
                  </div>
                  <div className="color-form___cell">
                    <input
                      type="text"
                      name="colorName"
                      value={element.colorName || ''}
                      onChange={(e) => handleChange(index, e)}
                      size={16}
                      title="color text"
                    ></input>
                    <label htmlFor="colorName">Name</label>
                  </div>
                  <div className="color-form___cell">
                    <input
                      type="number"
                      name="colorIterations"
                      value={element.colorIterations || ''}
                      onChange={(e) => handleChange(index, e)}
                      min={1}
                      max={10}
                      title="color iterations"
                    ></input>
                    <label htmlFor="colorIterations">Iterations</label>
                  </div>
                  <div className="color-form___cell">
                    <input
                      type="number"
                      name="colorStrength"
                      value={element.colorStrength || ''}
                      onChange={(e) => handleChange(index, e)}
                      min={0.01}
                      max={0.1}
                      step={0.01}
                      title="color strength"
                    ></input>
                    <label htmlFor="colorStrength">Strength</label>
                  </div>
                  <div className="color-form___cell">
                    <input
                      type="checkbox"
                      name="colorLighten"
                      checked={element.colorLighten || false}
                      title="color lighten toggle"
                      onChange={(e) => handleCheckChange(index, e)}
                    ></input>
                    <label htmlFor="colorLighten">Lighten</label>
                  </div>
                  {colorLen === 1 ? (
                    ''
                  ) : (
                    <div className="color-form___cell">
                      <button
                        className="color-form___remove"
                        type="button"
                        onClick={() => removeColorRow(index)}
                      >
                        ✕
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <button type="button" onClick={() => addNewColor()}>
            &#65291;
          </button>

          <div className="color-form___output">
            {colorScheme.map((element, index) => {
              return (
                <span
                  style={{
                    backgroundColor: element.colorBG ? element.colorBG : '',
                    color: element.colorText ? element.colorText : '',
                  }}
                  className={`color-form___result ${
                    element.error ? 'color-form___error' : ''
                  }`}
                  key={index}
                >
                  {element.error ? element.error : element.colorScheme}
                </span>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
};

export default ColorGenerator;
