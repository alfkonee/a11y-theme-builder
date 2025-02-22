﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under Apache-2.0 License. See License.txt in the project root for license information
 */
import React, { useState, useEffect } from 'react';
import { FormControlLabel, FormGroup, Grid, Switch } from '@mui/material';
import { Spacing } from 'a11y-theme-builder-sdk';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { HeadingSection } from '../content/HeadingSection';
import { SettingsSection } from '../content/SettingsSection';
import { ExampleSection } from '../content/ExampleSection';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { getCssValue } from '../../mui-a11y-tb/themes/Theme';

interface Props {
    spacingMolecule: Spacing;
}

export const SpacingMolecule: React.FC<Props> = ({ spacingMolecule }) => {
    const scale = parseInt(getCssValue("--baseFont"));

    const [showGuidelines, setShowGuidelines] = useState<boolean>(true)
    const [guideColor, setGuideColor] = useState("#FFFFFF")

    useEffect( () => {
        if (showGuidelines) {
            setGuideColor("#FC7EFF40")
        } else {
            setGuideColor("#FFFFFF")
        }
    }, [showGuidelines]);

    const sectionStyle = {
        padding: "calc(var(--section-padding)*var(--baseFont))",
        background: guideColor,
    }
    const pStyle = {
        padding: "calc(var(--p-padding)*var(--baseFont))",
        background: guideColor,
    }

    return (
        <>
            <HeadingSection item={spacingMolecule} title="Assign Spacing">
                The Spacing Molecule controls the amount of space between lines of text within a paragraph, and the paragraphs themselves.
            </HeadingSection>
            <Grid container spacing={2} columns={12} margin={2}>
                <Grid item spacing={2} lg={12} md={12} sm={12}>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={showGuidelines}
                                    onChange={() => setShowGuidelines(!showGuidelines)}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            }
                            label={<div className="overline-large">Show Guidelines</div>}
                        />
                    </FormGroup>
                </Grid>
            </Grid>
            <ExampleSection>
                <div style={sectionStyle}>
                    <h2>Sample</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                </div>
                <SettingsSection>
                    <div className="form-row">
                        <NumberScaledSelectable property={spacingMolecule.sectionPadding} units="px" defaultValue={3} scale={scale}/>
                    </div>
                    <div className="form-row">
                        <NumberScaledSelectable property={spacingMolecule.paragraphPadding} units="px" defaultValue={2} scale={scale}/>
                    </div>
                </SettingsSection>
                <GeneratedCodeSection item={spacingMolecule} />
            </ExampleSection>

        </>
    )
}
