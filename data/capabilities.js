import {
  Bot,
  Workflow,
  Sparkles,
  FileText,
  Headset,
  BarChart3,
} from "lucide-react";

export const capabilities = [
  {
    id: "ai-assistant",
    number: "01",
    Icon: Bot,
    title: "AI Assistant",
    description:
      "Intelligent conversational experiences designed around how your customers actually ask questions.",
    preview: "chat",
    previewHeading: "Conversations that get to the point.",
  },
  {
    id: "automation",
    number: "02",
    Icon: Workflow,
    title: "Automation",
    description:
      "Repetitive workflows handled automatically, so your team can spend time on the work that matters.",
    preview: "workflow",
    previewHeading: "Workflows that run themselves.",
  },
  {
    id: "recommendation-engines",
    number: "03",
    Icon: Sparkles,
    title: "Recommendation Engines",
    description:
      "Personalized suggestions that adapt to real user behaviour, not static rules.",
    preview: "recommendations",
    previewHeading: "Suggestions that fit the moment.",
  },
  {
    id: "document-intelligence",
    number: "04",
    Icon: FileText,
    title: "Document Intelligence",
    description:
      "Extracts and structures information from documents, contracts, and forms automatically.",
    preview: "document",
    previewHeading: "Documents in, structured data out.",
  },
  {
    id: "customer-support",
    number: "05",
    Icon: Headset,
    title: "Customer Support",
    description:
      "AI-assisted support that resolves common questions instantly and escalates the rest.",
    preview: "support",
    previewHeading: "Resolved before it becomes a ticket.",
  },
  {
    id: "data-analysis",
    number: "06",
    Icon: BarChart3,
    title: "Data Analysis",
    description:
      "Turns raw data into clear, actionable insight without a dashboard full of noise.",
    preview: "analytics",
    previewHeading: "Signal, not spreadsheets.",
  },
];
