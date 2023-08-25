﻿/*
 * Copyright (c) 2023 Discover Financial Services
 * Licensed under MIT License. See License.txt in the project root for license information
 */
import React, { useState } from 'react';
import { DesignSystem, Images } from 'a11y-theme-builder-sdk';
import { Breadcrumbs, Button, Link, Typography, Grid } from '@mui/material';
import { ExampleSection } from '../content/ExampleSection';
import { FooterColorModeSelector } from '../content/FooterColorModeSelector';
import { HeadingSection } from '../../pages/content/HeadingSection';
import { Footer5Columns } from "../../mui-a11y-tb/templates/Footer5Columns";
import { Footer4Columns } from "../../mui-a11y-tb/templates/Footer4Columns";
import { Footer3Columns } from "../../mui-a11y-tb/templates/Footer3Columns";

interface Props {
    colorMode?: string;
}


export const FooterLayouts: React.FC<Props> = ({ }) => {

      const [colorMode, setColorMode] = useState<string>("");

      return (
          <div>
              <HeadingSection title="Templates" heading="Image & Text" />
              <FooterColorModeSelector colorMode={colorMode} setColorMode={setColorMode}>
              </FooterColorModeSelector>
              <div className={colorMode}></div>

              <div className="subtitle1">Brand Section and 5 Colums</div>
              <Footer5Columns className={"top40 " + colorMode} />

              <div className="subtitle1">Brand Section and 4 Colums</div>
              <Footer4Columns className={"top40 " + colorMode} />

              <div className="subtitle1">Brand Section and 3 Colums</div>
              <Footer3Columns className={"top40 " + colorMode} />

          </div>
      )
  }
