import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface AccordionItem {
  id: number | string;
  title: string;
  content: string | React.ReactNode;
}

interface PheonixAccordionProps {
  items: AccordionItem[];
}

const PheonixAccordion: React.FC<PheonixAccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      {items.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === `panel-${item.id}`}
          onChange={handleChange(`panel-${item.id}`)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel-${item.id}-content`}
            id={`panel-${item.id}-header`}
          >
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PheonixAccordion;
