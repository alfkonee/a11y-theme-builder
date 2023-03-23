import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { SmallButtons, DesignSystem } from '../../sdk';
import { NumberSelectable } from '../../components/editors/NumberSelectable';
import { NumberScaledSelectable } from '../../components/editors/NumberScaledSelectable';
import { StringSelectable } from '../../components/editors/StringSelectable';
import { ExampleSection } from '../content/ExampleSection';
import { GeneratedCodeSection } from '../content/GeneratedCodeSection';
import { SettingsSection } from '../content/SettingsSection';
import { HeadingSection } from '../content/HeadingSection';

interface Props {
    molecule: SmallButtons;
    designSystem: DesignSystem;
}

export const ButtonsSmallMolecule: React.FC<Props> = ({ molecule, designSystem }) => {

    useEffect(() => {
        console.log("ButtonsSmallMolecule mounted");
    }, [])

    const grid = designSystem.atoms.gridSettings.grid.getValue();

    return (
        <div>
            <HeadingSection item={molecule} title="Apply Styles">
                The height of the target area of the small button is set to the minimum target are you defined, but the visble button height can be set to your preference.
            </HeadingSection>
            <ExampleSection>
                <div className="buttonDemo">
                    <Button className="small-btn" variant="contained">Primary</Button>
                    <Button className="small-btn" variant="outlined">Secondary</Button>
                    <Button className="small-btn" variant="text">Tertiary</Button>
                </div>
            </ExampleSection>
            <SettingsSection>
                <div className="row">
                    <div className="col-6 top16">
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.visibleHeight} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <NumberScaledSelectable property={molecule.horizontalPadding} units="px" scale={grid}/>
                        </div>
                        <div className="formRow">
                            <StringSelectable property={molecule.buttonText} defaultValue="" />
                        </div>
                    </div>
                </div>
            </SettingsSection>
            <GeneratedCodeSection item={molecule} />
        </div>
    )
}
