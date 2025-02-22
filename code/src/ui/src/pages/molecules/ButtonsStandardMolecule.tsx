/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { DesignSystem, StandardButtons } from 'a11y-theme-builder-sdk';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { StringCategorySelectable } from '../../components/editors/StringCategorySelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    molecule: StandardButtons;
    designSystem: DesignSystem;
}

export const ButtonsStandardMolecule: React.FC<Props> = ({ molecule, designSystem }) => {

    useEffect(() => {
        console.log("ButtonsStandardMolecule mounted");
    }, [])

    const grid = designSystem.atoms.gridSettings.grid.getValue();
    const border = designSystem.atoms.borderSettings.baseBorderWidth.getValue();

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                <p>Configure settings that affect the appearance of standard-size buttons</p>
            </HeadingSection>
            <ExampleSection>
                <div className="buttonDemo">
                    <Button variant="contained">Primary</Button>
                    <Button variant="outlined">Secondary</Button>
                    <Button variant="text">Tertiary</Button>
                </div>
                <SettingsSection>
                    <div className="row">
                        <div className="col-6 top16">
                            <div className="overline-XL">General Button Styling</div>
                            <div className="formRow top16">
                                <NumberScaledSelectable property={molecule.minWidth} units="px" scale={grid}/>
                            </div>
                            <div className="formRow top16">
                                <NumberScaledSelectable property={molecule.height} units="px" scale={grid}/>
                            </div>
                            <div className="formRow">
                                <NumberScaledSelectable property={molecule.radius} units="px" scale={grid} />
                            </div>
                            <div className="formRow">
                                <NumberScaledSelectable property={molecule.horizontalPadding} units="px" scale={grid}/>
                            </div>
                            <div className="formRow">
                                <StringSelectable property={molecule.buttonText} defaultValue="" />
                            </div>
                            <div className="formRow">
                                <StringCategorySelectable property={molecule.buttonShadow} defaultValue="None" />
                            </div>
                            <div className="overline-XL top40">Outline Button Styling</div>
                            <div className="formRow">
                                <NumberScaledSelectable property={molecule.secondaryBorder} units="px" scale={border}/>
                            </div>
                        </div>
                      </div>
                    </SettingsSection>
                  <GeneratedCodeSection item={molecule} />
               </ExampleSection>
        </div>
    )
}
