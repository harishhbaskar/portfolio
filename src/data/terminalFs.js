import { TECH_STACK, EXPERIENCE, PROJECTS, NOW_FOCUS, CONTACT_ITEMS } from './portfolioData.js';

export const fileSystem = {
  "~": {
    "stack.json": { type: "file", perm: "-rw-r--r--", contentId: "stack" },
    "experience.log": { type: "file", perm: "-rw-r--r--", contentId: "experience" },
    "projects": { type: "dir", perm: "drwxr-xr-x" },
    "now.md": { type: "file", perm: "-rw-r--r--", contentId: "now" },
    "contact.info": { type: "file", perm: "-rw-r--r--", contentId: "contact" }
  },
  "~/projects": {
    "healthchain.md": { type: "file", perm: "-rw-r--r--", contentId: "healthchain" },
    "spaced-repetition.md": { type: "file", perm: "-rw-r--r--", contentId: "spaced-repetition" },
    "subscription-tracker-api.md": { type: "file", perm: "-rw-r--r--", contentId: "subscription-tracker-api" }
  }
};

const formatStack = () => {
  return JSON.stringify(TECH_STACK, null, 2);
};

const formatExperience = () => {
  return EXPERIENCE.map(exp => {
    const statusStr = exp.status ? `[${exp.status}] ` : '';
    const header = `${statusStr}${exp.role}\n${exp.meta}`;
    const bullets = exp.points.map(pt => `  • ${pt}`).join('\n');
    return `${header}\n${bullets}`;
  }).join('\n\n');
};

const formatNow = () => {
  const title = `# ${NOW_FOCUS.title}\n${NOW_FOCUS.subtitle}\n`;
  const bullets = NOW_FOCUS.points.map(pt => `- **${pt.bold}** ${pt.text}`).join('\n');
  return title + bullets;
};

const formatContact = () => {
  return CONTACT_ITEMS.map(item => `${item.flag.replace(/^--/, '')}: ${item.val}`).join('\n');
};

const formatProject = (filename) => {
  const proj = PROJECTS.find(p => p.filename === filename);
  if (!proj) return `Error: Project details for ${filename} not found.`;
  
  const title = `# ${proj.title}\n\nDescription:\n  ${proj.description}\n\nProblem Solved:\n  ${proj.problem}`;
  const features = `\n\nKey Features:\n` + proj.features.map(f => `  • ${f}`).join('\n');
  
  const technical = proj.technical && proj.technical.length > 0
    ? `\n\nTechnical Implementation:\n` + proj.technical.map(t => `  • ${t}`).join('\n')
    : '';
    
  const stack = `\n\nStack:\n  ${proj.stack.join(', ')}`;
  const github = `\n\nGitHub:\n  ${proj.githubUrl}`;
  
  return title + features + technical + stack + github;
};

export const resolveFileContent = (contentId) => {
  switch (contentId) {
    case 'stack':
      return formatStack();
    case 'experience':
      return formatExperience();
    case 'now':
      return formatNow();
    case 'contact':
      return formatContact();
    case 'healthchain':
      return formatProject('healthchain');
    case 'spaced-repetition':
      return formatProject('spaced-repetition');
    case 'subscription-tracker-api':
      return formatProject('subscription-tracker-api');
    default:
      return null;
  }
};
