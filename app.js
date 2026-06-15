const TABLE_ICON_BASE = "./assets/icons/table";

function tableIcon(name, alt) {
  return { type: "icon", src: `${TABLE_ICON_BASE}/table-${name}.png`, alt };
}

const groups = [
  {
    id: "g1",
    number: "01",
    icon: "./assets/icons/group-reality-gap.png",
    title: "The Reality Gap",
    short: "Why AI looks powerful outside but limited inside work.",
    color: "red",
    beats: [
      {
        id: "g1-b1",
        title: "What We See Outside",
        purpose: "Start from the strongest external signal: AI demos make AI look like a superpower.",
        panels: [
          panel("Icon", "Outside, AI Looks Like a Superpower", ["AI appears to write, analyze, code, and operate across systems.", "Most public demos show optimized conditions, open tools, and controlled examples.", "The first feeling is: AI is already far ahead of normal office work."], "./assets/panels/group-1/G1-B1-P1-outside-ai-superpower.png"),
          panel("Icon", "Everyone Asks for Real Use Cases", ["People ask what AI is doing inside real companies.", "The question sounds simple, but the answer is often vague.", "This creates a visible gap between market excitement and workplace reality."], "./assets/panels/group-1/G1-B1-P2-real-use-cases.png"),
          panel("Icon", "High-Value Workflows Are Still Rare", ["Many examples stay at chat, drafting, summarization, and brainstorming.", "End-to-end workflow cases are harder to find.", "High-value enterprise AI requires data, tools, permissions, and governance."], "./assets/panels/group-1/G1-B1-P3-rare-high-value-workflows.png")
        ]
      },
      {
        id: "g1-b2",
        title: "What We Experience Inside",
        purpose: "Move from outside observation to internal employee experience.",
        panels: [
          panel("Icon", "The Company Gives Us an AI Tool", ["A company-approved AI tool arrives with high expectations.", "Employees expect visible productivity improvement.", "The tool is useful, but its role is usually narrower than imagined."], "./assets/panels/group-1/G1-B2-P1-company-gives-ai-tool.png"),
          panel("Icon", "Back at Work, AI Feels Boxed In", ["Inside work, AI meets data access, permissions, systems, approvals, and security boundaries.", "These boundaries are necessary in enterprise environments.", "The same AI may feel much less powerful at work."], "./assets/panels/group-1/G1-B2-P2-ai-feels-boxed-in.png"),
          panel("Icon", "Most Answers Stay at Basic Chat", ["Common use cases remain email drafts, summaries, translation, polishing, and first drafts.", "These are helpful but not the same as workflow transformation.", "The gap creates wrong expectations about AI value."], "./assets/panels/group-1/G1-B2-P3-basic-chat.png")
        ]
      },
      {
        id: "g1-b3",
        title: "Why the Gap Appears",
        purpose: "Explain that the gap is a design mismatch, not just a weak-tool problem.",
        panels: [
          panel("Icon", "The Gap Feels Confusing", ["People compare public AI demos with internal tools.", "The comparison feels unfair because the operating environments are different.", "Confusion becomes disappointment when expectations are not managed."], "./assets/panels/group-1/G1-B3-P1-gap-feels-confusing.png"),
          panel("Icon", "But the Tool Has a Specific Role", ["Every AI product has a role, capability boundary, and allowed environment.", "A chat tool is not automatically an agent.", "A compliant tool is not automatically department-ready."], "./assets/panels/group-1/G1-B3-P2-tool-specific-role.png"),
          panel("Icon", "Expectation and Capability Do Not Match", ["Employees may expect agentic workflows or AI coding.", "The provided tool may only support chat, Office assistance, or policy Q&A.", "Wrong expectations create wrong evaluations."], "./assets/panels/group-1/G1-B3-P3-expectation-capability-mismatch.png")
        ]
      },
      {
        id: "g1-b4",
        title: "The Enterprise Environment Layer",
        purpose: "Show the layers that decide what AI can actually do inside a company.",
        panels: [
          panel("Icon", "AI Needs the Right Context", ["AI must see the right files, data, policies, process rules, and history.", "Without context, even a strong model becomes generic.", "Context design is part of real AI work."], "./assets/panels/group-1/G1-B4-P1-right-context.png"),
          panel("Icon", "AI Needs Tools and Permissions", ["Execution requires tools, system connections, and permissions.", "A chat box cannot operate a workflow by itself.", "Tool access must match business and risk boundaries."], "./assets/panels/group-1/G1-B4-P2-tools-permissions.png"),
          panel("Icon", "AI Must Be Governed and Verified", ["Finance and approval scenarios need checks, logs, audits, and responsibility boundaries.", "Verification is not optional in sensitive work.", "Governance shapes what AI is allowed to do."], "./assets/panels/group-1/G1-B4-P3-governed-verified.png"),
          panel("Icon", "Compliance-Ready Is Not Department-Ready", ["Company-wide tools are often designed for compliance first.", "Different departments have different workflow needs.", "A tool can be compliant and still not fit a department well."], "./assets/panels/group-1/G1-B4-P4-compliance-not-department-ready.png")
        ]
      },
      {
        id: "g1-b5",
        title: "The Reality Gap Formula",
        purpose: "Give the audience a simple frame for evaluating AI value at work.",
        panels: [
          panel("Icon", "AI Value Depends on Three Fits", ["Enterprise environment fit.", "Tool capability fit.", "Department workflow fit."], "./assets/panels/group-1/G1-B5-P1-three-fits.png"),
          panel("Icon", "The Gap Is a Design Problem, Not Just a Tool Problem", ["The real question is not only whether AI is strong.", "The question is whether environment, capability, and process are designed together.", "Better AI outcomes require better system design."], "./assets/panels/group-1/G1-B5-P2-design-problem.png")
        ]
      }
    ]
  },
  {
    id: "g2",
    number: "02",
    icon: "./assets/icons/group-language-gap.png",
    title: "The Language Gap",
    short: "Why AI vocabulary creates wrong expectations.",
    color: "blue",
    beats: [
      {
        id: "g2-b1",
        title: "Everyone Uses the Same Words Differently",
        purpose: "Show why people can say the same AI words while imagining different capabilities.",
        panels: [
          panel("Icon", "Everyone Says \"AI\"", ["The word AI is too broad.", "Different people may mean chat, Copilot, automation, agentic AI, or AI coding.", "The conversation can sound aligned while it is not."], "./assets/panels/group-2/G2-B1-P1-everyone-says-ai.png"),
          panel("Icon", "One Means Chat, Another Means Agent", ["One person imagines a chatbot.", "Another imagines a project-managing agent.", "Another expects a tool-building AI coding assistant."], "./assets/panels/group-2/G2-B1-P2-chat-agent-coding.png"),
          panel("Icon", "The Conversation Looks Aligned, but It Is Not", ["Shared words do not guarantee shared understanding.", "Capability levels must be named explicitly.", "Otherwise the team debates different things under one label."], "./assets/panels/group-2/G2-B1-P3-conversation-not-aligned.png")
        ]
      },
      {
        id: "g2-b2",
        title: "Misused Terms Create Wrong Expectations",
        purpose: "Connect vocabulary mistakes to practical workplace disappointment.",
        panels: [
          panel("Icon", "A Word Becomes an Expectation", ["Calling a tool an agent makes people expect autonomous work.", "Calling a chatbot a workflow solution creates false confidence.", "Labels shape expectations."], "./assets/panels/group-2/G2-B2-P1-word-becomes-expectation.png"),
          panel("Icon", "Wrong Context, Wrong Capability", ["A capability name must match the actual environment.", "A tool without data, tools, state, and verification cannot behave like a full agent.", "Vocabulary must reflect real operating conditions."], "./assets/panels/group-2/G2-B2-P2-wrong-context-capability.png"),
          panel("Icon", "Expectation Turns into Disappointment", ["When a tool cannot meet the imagined capability, people say AI is not useful.", "The problem may be the expectation, not the model.", "Clear naming prevents disappointment."], "./assets/panels/group-2/G2-B2-P3-expectation-disappointment.png")
        ]
      },
      {
        id: "g2-b3",
        title: "\"Agentic\" Needs Extra Care",
        purpose: "Explain why the word agentic should be used more carefully.",
        panels: [
          panel("Icon", "Not Every Assistant Is Agentic", ["Chatbots, Copilot-style tools, RPA buttons, and single-task assistants are not automatically agentic.", "Agentic should describe behavior, not marketing language.", "Misusing the word looks unprofessional."], "./assets/panels/group-2/G2-B3-P1-not-every-assistant-agentic.png"),
          panel("Icon", "Agentic Means an Execution Loop", ["Goal understanding.", "Task decomposition.", "Tool use, state tracking, and result verification."], "./assets/panels/group-2/G2-B3-P2-agentic-execution-loop.png"),
          panel("Icon", "Misusing \"Agentic\" Looks Unprofessional", ["External discussions require precise language.", "Vendors and partners will notice vague labels.", "Professional AI literacy starts with naming the capability correctly."], "./assets/panels/group-2/G2-B3-P3-misusing-agentic-unprofessional.png")
        ]
      },
      {
        id: "g2-b35",
        title: "Capability Comparison Board",
        purpose: "Compare common AI tool types by capability instead of hype.",
        table: capabilityMatrix()
      },
      {
        id: "g2-b4",
        title: "Build a Shared Vocabulary Before Discussing AI Strategy",
        purpose: "Close the vocabulary section with a practical rule.",
        panels: [
          panel("Icon", "Define the Capability Before the Label", ["Ask what the tool can actually do.", "Then decide what to call it.", "Do not choose a label first and force the tool into it."], "./assets/panels/group-2/G2-B4-P1-capability-before-label.png"),
          panel("Icon", "Shared Vocabulary Creates Better Decisions", ["Shared vocabulary improves AI strategy discussions.", "It reduces wrong expectations.", "It helps teams compare tools professionally."], "./assets/panels/group-2/G2-B4-P2-shared-vocabulary-decisions.png")
        ]
      },
      {
        id: "g2-b5",
        title: "Recommended AI Vocabulary Guide",
        purpose: "Give practical naming examples for internal and external conversations.",
        table: vocabularyGuide()
      }
    ]
  },
  {
    id: "g3",
    number: "03",
    icon: "./assets/icons/group-capability-evolvement.png",
    title: "The Capability Evolvement",
    short: "From better prompts to better AI-enabled systems.",
    color: "green",
    beats: [
      {
        id: "g3-b0",
        title: "Three Engineerings Agenda",
        purpose: "Set the macro map before going into details.",
        table: engineeringAgenda(),
        panels: [
          panel("Icon", "Prompt Engineering: Better Questions", ["The main question is how to ask better.", "It improves single-response quality.", "It cannot solve missing context, tools, permission, or verification."], "./assets/panels/group-3/G3-B0-P1-prompt-engineering-better-questions.png"),
          panel("Icon", "Context Engineering: Better Materials", ["The main question is what AI should know.", "It organizes files, rules, examples, and standards.", "It makes AI work more business-aware."], "./assets/panels/group-3/G3-B0-P2-context-engineering-better-materials.png"),
          panel("Icon", "Harness Engineering: Better Workflow System", ["The main question is how AI operates inside work.", "It designs tools, permissions, verification, logs, and human handoff.", "It turns AI from answer generator into a system component."], "./assets/panels/group-3/G3-B0-P3-harness-engineering-better-system.png")
        ]
      },
      {
        id: "g3-b1",
        title: "Prompting Was the Early Skill",
        purpose: "Explain why prompting mattered and why it now has a ceiling.",
        panels: [
          panel("Icon", "2023: Everyone Learns How to Ask", ["People learned roles, formats, tone, constraints, and step-by-step instructions.", "Prompting made AI outputs more controllable.", "It was the early literacy skill."], "./assets/panels/group-3/G3-B1-P1-2023-learning-how-to-ask.png"),
          panel("Icon", "Prompting Helps, but It Has a Ceiling", ["A better question cannot create missing data.", "It cannot grant permissions or connect systems.", "It cannot verify sensitive work by itself."], "./assets/panels/group-3/G3-B1-P2-prompting-has-a-ceiling.png"),
          panel("Icon", "Prompting Becomes a Basic Skill", ["Prompting is still useful.", "But it is now closer to basic literacy.", "The higher skill is designing context and workflow systems."], "./assets/panels/group-3/G3-B1-P3-prompting-basic-skill.png")
        ]
      },
      {
        id: "g3-b2",
        title: "Context Becomes the Real Lever",
        purpose: "Move from asking better to giving AI the right materials.",
        panels: [
          panel("Icon", "2024: AI Needs the Right Material", ["Long context, file upload, knowledge bases, and enterprise data access changed AI work.", "The quality of context became a core lever.", "Business material matters as much as wording."], "./assets/panels/group-3/G3-B2-P1-2024-right-material.png"),
          panel("Icon", "Better Context Creates Better Work", ["AI needs data, policy, process, history, and objectives.", "Good context narrows ambiguity.", "The answer becomes more relevant to real work."], "./assets/panels/group-3/G3-B2-P2-better-context-less-ambiguity.png"),
          panel("Icon", "Context Design Becomes a Work Skill", ["Prepare materials.", "Define background and rules.", "Explain acceptance standards."], "./assets/panels/group-3/G3-B2-P3-context-design-work-skill.png")
        ]
      },
      {
        id: "g3-b3",
        title: "Project-Managing Agentic AI Matters",
        purpose: "Explain why project workspace management is important for finance office work.",
        panels: [
          panel("Icon", "Work Is Not One File Anymore", ["Real projects contain spreadsheets, PDFs, documents, images, videos, reports, and approval records.", "Work lives in a project workspace.", "Single-file AI is not enough."], "./assets/panels/group-3/G3-B3-P1-not-one-file-project-workspace.png"),
          panel("Icon", "AI Needs to Understand the Workspace", ["High-value agentic AI understands file relationships and project goals.", "It can track versions, missing inputs, and dependencies.", "It supports long-running project work."], "./assets/panels/group-3/G3-B3-P2-workspace-understanding.png"),
          panel("Icon", "Project Memory Changes the Work", ["Project memory lets AI maintain continuity.", "It helps coordinate tasks and preserve outputs.", "This is different from one-off chat."], "./assets/panels/group-3/G3-B3-P3-project-memory-continuity.png")
        ]
      },
      {
        id: "g3-b35",
        title: "Einstein Capability Journey",
        purpose: "Use a simple metaphor to explain why AI Coding is a different capability layer.",
        panels: [
          panel("Icon", "Caged Einstein = Chat", ["Einstein answers from a cage.", "He teaches us, but we still do the work.", "This is chat."], "./assets/panels/group-3/G3-B35-P1-caged-einstein-chat.png"),
          panel("Icon", "Desk-Bound Einstein = Assistant", ["Einstein is fixed at one desk with one tool.", "He can do one type of task well.", "This is a task assistant."], "./assets/panels/group-3/G3-B35-P2-desk-bound-einstein-assistant.png"),
          panel("Icon", "Tool-Using Einstein = Agent", ["Einstein can use multiple tools.", "He can complete multi-step work within tool boundaries.", "This is project-oriented agentic capability."], "./assets/panels/group-3/G3-B35-P3-tool-using-einstein-agent.png"),
          panel("Icon", "Tool-Building Einstein = AI Coding", ["Einstein can help build new tools.", "He solves needs that existing tools do not cover.", "This is why AI Coding is different."], "./assets/panels/group-3/G3-B35-P4-tool-building-einstein-ai-coding.png")
        ]
      },
      {
        id: "g3-b4",
        title: "AI Coding Becomes Practical for Business Users",
        purpose: "Explain why AI Coding is not just another AI tool.",
        panels: [
          panel("Icon", "Late 2025 / 2026: AI Coding Moves Beyond IT", ["AI Coding becomes more accessible to non-IT users.", "Business teams can participate in tool creation.", "The value moves from asking to building."], "./assets/panels/group-3/G3-B4-P1-2026-ai-coding-beyond-it.png"),
          panel("Icon", "A Powerful AI Is Not Always the Right Vehicle", ["A giant machine is not ideal for every small task.", "Some needs are too specific for a general AI tool.", "The right vehicle depends on the workflow."], "./assets/panels/group-3/G3-B4-P2-powerful-not-always-right.png"),
          panel("Icon", "Sometimes You Need a Small Bicycle", ["A small, stable tool can be better than a huge system.", "Local workflow tools reduce repeated manual effort.", "Good tools fit the job."], "./assets/panels/group-3/G3-B4-P3-small-tool-better-fit.png"),
          panel("Icon", "AI Coding Builds the Bicycle", ["AI Coding turns workflow needs into reusable tools.", "It can support checks, imports, reports, trackers, and dashboards.", "This is practical business tool building."], "./assets/panels/group-3/G3-B4-P4-ai-coding-builds-tool.png")
        ]
      },
      {
        id: "g3-b5",
        title: "Why Treasury Needs Both Agentic AI and AI Coding",
        purpose: "Connect the capability story to Treasury work.",
        panels: [
          panel("Icon", "Treasury Work Spans Global Projects and Daily Details", ["Treasury often sits inside large multinational companies.", "It supports cross-border, cross-functional, system-level projects.", "It also handles precise daily operational details."], "./assets/panels/group-3/G3-B5-P1-treasury-scope-global-daily.png"),
          panel("Icon", "Agentic AI Helps Manage Large Project Workspaces", ["Large projects need file management, task coordination, version tracking, and gap detection.", "Agentic AI helps keep the project workspace coherent.", "It supports scale."], "./assets/panels/group-3/G3-B5-P2-agentic-ai-large-project-workspaces.png"),
          panel("Icon", "AI Coding Helps Build Precise Local Tools", ["Daily workflows need small tools for validation, approval tracking, fee analysis, and report generation.", "AI Coding helps build those tools.", "It supports precision."], "./assets/panels/group-3/G3-B5-P3-ai-coding-local-tools.png"),
          panel("Icon", "Treasury Needs Both Scale and Precision", ["Treasury needs big-project capability and small-process optimization.", "Agentic AI and AI Coding solve different needs.", "Both matter."], "./assets/panels/group-3/G3-B5-P4-treasury-scale-precision.png")
        ]
      }
    ]
  },
  {
    id: "g4",
    number: "04",
    icon: "./assets/icons/group-future-operation.png",
    title: "The Vision of Future Operation Model",
    short: "How humans and AI should be positioned in future processes.",
    color: "violet",
    beats: [
      {
        id: "g4-b1",
        title: "Where Our Current AI Environment Stands",
        purpose: "Position current internal AI tools against more advanced capabilities.",
        table: currentEnvironmentMatrix(),
        panels: [
          panel("Icon", "Our Current AI Tools Have a Defined Role", ["Copilot Web Chat, Copilot in Microsoft Office, and internal policy chatbots are valuable.", "Their main role is personal productivity, Office assistance, and basic internal knowledge Q&A.", "They are not the same as project-managing agentic AI or AI Coding."], "./assets/panels/group-4/G4-B1-P1-current-ai-defined-role.png")
        ]
      },
      {
        id: "g4-b2",
        title: "Human Review Alone Cannot Scale Forever",
        purpose: "Explain why future AI output cannot be reviewed only by manual human checking.",
        panels: [
          panel("Icon", "AI Can Produce Faster Than Humans Can Review", ["AI output volume can grow faster than manual review capacity.", "Human review becomes a bottleneck.", "A process designed only around manual review will not scale."], "./assets/panels/group-4/G4-B2-P1-ai-faster-than-human-review.png"),
          panel("Icon", "Sensitive Work Still Needs Control", ["Finance, approvals, and compliance still need strong control.", "The control model must evolve.", "Review cannot mean only manual line-by-line checking forever."], "./assets/panels/group-4/G4-B2-P2-sensitive-work-control-evolves.png")
        ]
      },
      {
        id: "g4-b3",
        title: "AI Reviews AI, Humans Govern the System",
        purpose: "Introduce a more scalable verification model.",
        panels: [
          panel("Icon", "AI Can Handle Routine Verification", ["Independent AI can check consistency, exceptions, and routine errors.", "It can compare outputs against rules and source materials.", "This reduces low-value review load."], "./assets/panels/group-4/G4-B3-P1-ai-routine-verification.png"),
          panel("Icon", "Humans Handle Exceptions and Accountability", ["Humans handle judgment, high-risk approval, rule changes, and accountability.", "People govern the system rather than manually checking everything.", "The role moves upward."], "./assets/panels/group-4/G4-B3-P2-humans-govern-exceptions.png")
        ]
      },
      {
        id: "g4-b4",
        title: "Humans Become Process Architects",
        purpose: "Close the presentation with the future human role.",
        panels: [
          panel("Icon", "Humans Design the Workflow", ["Humans define objectives, workflow rules, risk boundaries, and acceptance standards.", "This connects directly to AI Coding and process design.", "The human role becomes more architectural."], "./assets/panels/group-4/G4-B4-P1-humans-design-workflow.png"),
          panel("Icon", "AI Executes, Checks, and Improves the Process", ["AI executes routine steps, checks outputs, provides feedback, and supports improvement.", "AI expands process capacity.", "Humans govern the operating model."], "./assets/panels/group-4/G4-B4-P2-ai-executes-checks-improves.png"),
          panel("Icon", "The Future Is Not Human vs AI", ["The future is not a simple replacement story.", "Humans design the process.", "AI extends what the process can do."], "./assets/panels/group-4/G4-B4-P3-human-ai-operating-model.png")
        ]
      }
    ]
  }
];

groups.unshift({
  id: "opening",
  number: "00",
  special: "opening",
  icon: "./assets/icons/brand-control-room.png",
  title: "Opening",
  short: "Start the sharing with a light AI map room.",
  color: "blue",
  beats: [
    {
      id: "opening-b1",
      title: "AI at Work",
      purpose: "From Hype to Practical Capability",
      panels: [
        panel("Icon", "A friendly map for understanding AI inside company work.", ["From Hype to Practical Capability"], "./assets/panels/special/opening-control-room.png")
      ]
    }
  ]
});

groups.push({
  id: "final",
  number: "Final",
  special: "final",
  icon: "./assets/icons/current-panel.png",
  title: "Final Takeaway",
  short: "Close the sharing and open the discussion.",
  color: "green",
  beats: [
    {
      id: "final-b1",
      title: "Humans Design, AI Extends",
      purpose: "The future is better process design with AI inside it.",
      panels: [
        panel("Icon", "Questions & Discussion", ["Name the capability.", "Design the workflow.", "Use AI with context, tools, and controls."], "./assets/panels/special/final-takeaway.png")
      ]
    }
  ]
});

let currentGroupIndex = 0;
let currentBeatIndex = 0;
let currentPanelIndex = 0;
let zoomItemIndex = 0;

const groupList = document.getElementById("groupList");
const overviewPanel = document.getElementById("overviewPanel");
const overviewGrid = document.getElementById("overviewGrid");
const beatStage = document.getElementById("beatStage");
const groupEyebrow = document.getElementById("groupEyebrow");
const beatTitle = document.getElementById("beatTitle");
const beatPurpose = document.getElementById("beatPurpose");
const panelBoard = document.getElementById("panelBoard");
const detailCard = document.getElementById("detailCard");
const miniMap = document.getElementById("miniMap");
const breadcrumb = document.getElementById("breadcrumb");
const progressChip = document.getElementById("progressChip");
const topGroupIcon = document.getElementById("topGroupIcon");
const imageZoom = document.getElementById("imageZoom");
const imageZoomContent = document.getElementById("imageZoomContent");
const imageZoomImg = document.getElementById("imageZoomImg");
const imageZoomTable = document.getElementById("imageZoomTable");
const imageZoomTitle = document.getElementById("imageZoomTitle");
const imageZoomPrev = document.getElementById("imageZoomPrev");
const imageZoomNext = document.getElementById("imageZoomNext");
const imageZoomPrevBoard = document.getElementById("imageZoomPrevBoard");
const imageZoomNextBoard = document.getElementById("imageZoomNextBoard");
const fullscreenButton = document.getElementById("fullscreenButton");

document.getElementById("toggleNav").addEventListener("click", () => document.body.classList.toggle("nav-open"));
document.getElementById("resetPresentation").addEventListener("click", () => resetPresentation());
fullscreenButton.addEventListener("click", () => toggleFullscreen());
imageZoom.addEventListener("click", (event) => {
  if (event.target === imageZoom) closeImageZoom();
});
imageZoomPrev.addEventListener("click", () => navigateZoom(-1));
imageZoomNext.addEventListener("click", () => navigateZoom(1));
imageZoomPrevBoard.addEventListener("click", () => jumpAdjacentBeatMain(-1));
imageZoomNextBoard.addEventListener("click", () => jumpAdjacentBeatMain(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageZoom.classList.contains("open")) {
    closeImageZoom();
    return;
  }
  if (imageZoom.classList.contains("open")) {
    if (event.key === "ArrowRight") navigateZoom(1);
    if (event.key === "ArrowLeft") navigateZoom(-1);
    return;
  }
  if (event.key === "ArrowRight") stepBeat(1);
  if (event.key === "ArrowLeft") stepBeat(-1);
  if (event.key === "Escape") document.body.classList.remove("nav-open");
});

function panel(icon, title, bullets, image = "", callouts = []) {
  return { icon, title, bullets, image, callouts };
}

function render() {
  renderNav();
  overviewPanel.hidden = true;
  beatStage.hidden = false;
  renderBeat();
}

function renderNav() {
  groupList.innerHTML = groups
    .map((group, groupIndex) => {
      const isOpen = groupIndex === currentGroupIndex;
      const beatLinks = group.beats
        .map((beat, beatIndex) => {
          const active = isOpen && beatIndex === currentBeatIndex;
          return `<button class="beat-link ${active ? "active" : ""}" data-group="${groupIndex}" data-beat="${beatIndex}">${beat.title}</button>`;
        })
        .join("");
      return `<article class="group-card ${group.special ? "special" : ""} ${isOpen ? "open" : ""}">
        <button class="group-button ${isOpen ? "active" : ""}" data-group="${groupIndex}">
          <strong><span class="group-menu-icon"><img src="${group.icon}" alt="" /></span>${formatGroupLabel(group)}</strong>
          <span>${group.short}</span>
        </button>
        <div class="beat-subnav">${beatLinks}</div>
      </article>`;
    })
    .join("");

  groupList.querySelectorAll(".group-button").forEach((button) => {
    button.addEventListener("click", () => {
      currentGroupIndex = Number(button.dataset.group);
      currentBeatIndex = 0;
      currentPanelIndex = 0;
      document.body.classList.remove("nav-open");
      render();
    });
  });

  groupList.querySelectorAll(".beat-link").forEach((button) => {
    button.addEventListener("click", () => {
      currentGroupIndex = Number(button.dataset.group);
      currentBeatIndex = Number(button.dataset.beat);
      currentPanelIndex = 0;
      document.body.classList.remove("nav-open");
      render();
    });
  });
}

function formatGroupLabel(group) {
  if (group.special === "opening") return "00. Opening";
  if (group.special === "final") return "Final Takeaway";
  return `${group.number}. ${group.title}`;
}

function renderOverview() {
  overviewGrid.innerHTML = groups
    .map(
      (group, index) => `<article class="overview-card" data-group="${index}">
        <span class="number"><img src="${group.icon}" alt="" /></span>
        <h3>${group.title}</h3>
        <p>${group.short}</p>
        <p><strong>${group.beats.length}</strong> beat screens</p>
      </article>`
    )
    .join("");

  overviewGrid.querySelectorAll(".overview-card").forEach((card) => {
    card.addEventListener("click", () => {
      currentGroupIndex = Number(card.dataset.group);
      currentBeatIndex = 0;
      currentPanelIndex = 0;
      render();
    });
  });
}

function renderBeat() {
  const group = groups[currentGroupIndex];
  const beat = group.beats[currentBeatIndex];
  const globalBeat = getGlobalBeatPosition();
  const totalBeats = groups.reduce((sum, item) => sum + item.beats.length, 0);

  groupEyebrow.textContent = `${group.number} / ${group.title}`;
  beatTitle.textContent = beat.title;
  beatPurpose.textContent = beat.purpose;
  breadcrumb.textContent = `${group.title} / ${beat.title}`;
  progressChip.textContent = `${globalBeat + 1} of ${totalBeats}`;
  topGroupIcon.src = group.icon;

  const panelHtml = beat.panels ? beat.panels.map(renderPanel).join("") : "";
  const tableHtml = beat.table ? renderTable(beat.table) : "";
  const panelCount = beat.panels?.length || 0;
  panelBoard.classList.toggle("with-table", Boolean(beat.table));
  panelBoard.classList.toggle("special-board", Boolean(group.special));
  panelBoard.classList.toggle("two-panel-board", panelCount === 2 && !beat.table && !group.special);
  panelBoard.innerHTML = panelHtml + tableHtml;

  panelBoard.querySelectorAll(".comic-panel").forEach((item) => {
    item.addEventListener("click", () => {
      currentPanelIndex = Number(item.dataset.panel);
      renderBeat();
    });
  });

  panelBoard.querySelectorAll(".panel-art").forEach((art) => {
    art.addEventListener("click", (event) => {
      event.stopPropagation();
      const panel = art.closest(".comic-panel");
      const panelIndex = Number(panel?.dataset.panel || 0);
      const zoomIndex = getZoomItemsForBeat().findIndex((item) => item.type === "panel" && item.panelIndex === panelIndex);
      openZoomAtIndex(Math.max(0, zoomIndex));
    });
  });

  panelBoard.querySelectorAll(".table-card").forEach((table) => {
    table.addEventListener("click", () => {
      const zoomIndex = getZoomItemsForBeat().findIndex((item) => item.type === "table");
      openZoomAtIndex(Math.max(0, zoomIndex));
    });
  });

  renderDetail(beat);
  renderMiniMap(group);
}

function renderPanel(item, index) {
  const callouts = item.callouts?.length
    ? `<div class="panel-callouts">${item.callouts.map((callout) => `<span class="panel-callout ${callout.className}">${callout.text}</span>`).join("")}</div>`
    : "";
  const art = item.image ? `<figure class="panel-art"><img src="${item.image}" alt="" loading="lazy" />${callouts}</figure>` : "";
  const number = getKnowledgeNumber(currentGroupIndex, currentBeatIndex, index);
  return `<article class="comic-panel ${item.image ? "has-art" : ""} ${index === currentPanelIndex ? "active" : ""}" data-panel="${index}">
    ${numberBadge(number)}
    <h3>${item.title}</h3>
    ${art}
    <p>${item.bullets[0]}</p>
  </article>`;
}

function getKnowledgeNumber(groupIndex, beatIndex, itemIndex) {
  const groupNumber = groups[groupIndex]?.number || String(groupIndex + 1).padStart(2, "0");
  if (groups[groupIndex]?.special) return groupNumber;
  return `${groupNumber}.${beatIndex + 1}.${itemIndex + 1}`;
}

function numberBadge(number) {
  return `<span class="knowledge-number">${number}</span>`;
}

function zoomTitleWithNumber(number, title) {
  return `<span>${title}</span>${numberBadge(number)}`;
}

function getZoomItemsForBeat(groupIndex = currentGroupIndex, beatIndex = currentBeatIndex) {
  const beat = groups[groupIndex]?.beats[beatIndex];
  if (!beat) return [];

  const panelItems = (beat.panels || [])
    .map((item, panelIndex) => ({ type: "panel", item, panelIndex, number: getKnowledgeNumber(groupIndex, beatIndex, panelIndex) }))
    .filter((entry) => entry.item.image);
  const tableItems = beat.table ? [{ type: "table", table: beat.table, number: getKnowledgeNumber(groupIndex, beatIndex, (beat.panels || []).length) }] : [];
  return [...panelItems, ...tableItems];
}

function openZoomAtIndex(index) {
  zoomItemIndex = index;
  renderZoomItem();
  imageZoom.classList.add("open");
  imageZoom.setAttribute("aria-hidden", "false");
  document.body.classList.add("image-zoom-open");
}

function renderZoomItem() {
  const items = getZoomItemsForBeat();
  if (!items.length) return;

  zoomItemIndex = Math.max(0, Math.min(items.length - 1, zoomItemIndex));
  const item = items[zoomItemIndex];

  imageZoomContent.classList.toggle("is-table", item.type === "table");
  imageZoomImg.hidden = item.type !== "panel";
  imageZoomTable.hidden = item.type !== "table";

  if (item.type === "panel") {
    currentPanelIndex = item.panelIndex;
    imageZoomTitle.innerHTML = zoomTitleWithNumber(item.number, item.item.title);
    imageZoomImg.src = item.item.image;
    imageZoomImg.alt = item.item.title;
    imageZoomTable.innerHTML = "";
  } else {
    currentPanelIndex = -1;
    imageZoomTitle.innerHTML = zoomTitleWithNumber(item.number, item.table.title);
    imageZoomImg.removeAttribute("src");
    imageZoomImg.alt = "";
    imageZoomTable.innerHTML = renderTableContent(item.table, item.number, { hideHeader: true });
  }

  renderZoomControls(items);
  renderBeat();
}

function renderZoomControls(items) {
  const previousBeat = getAdjacentBeat(-1);
  const nextBeat = getAdjacentBeat(1);
  const atFirst = zoomItemIndex === 0;
  const atLast = zoomItemIndex === items.length - 1;

  imageZoomPrev.classList.toggle("is-boundary", atFirst);
  imageZoomNext.classList.toggle("is-boundary", atLast);
  imageZoomPrev.disabled = atFirst && !previousBeat;
  imageZoomNext.disabled = atLast && !nextBeat;
  imageZoomPrev.innerHTML = atFirst ? "<strong>Previous beat</strong><span>Last item</span>" : "<strong>Previous</strong>";
  imageZoomNext.innerHTML = atLast ? "<strong>Next beat</strong><span>First item</span>" : "<strong>Next</strong>";

  imageZoomPrevBoard.hidden = !atFirst || !previousBeat;
  imageZoomNextBoard.hidden = !atLast || !nextBeat;
  imageZoomPrevBoard.innerHTML = previousBeat ? "<strong>Open previous beat</strong><span>Main view</span>" : "";
  imageZoomNextBoard.innerHTML = nextBeat ? "<strong>Open next beat</strong><span>Main view</span>" : "";
}

function navigateZoom(direction) {
  const items = getZoomItemsForBeat();
  if (!items.length) return;

  const nextIndex = zoomItemIndex + direction;
  if (nextIndex >= 0 && nextIndex < items.length) {
    zoomItemIndex = nextIndex;
    renderZoomItem();
    return;
  }

  const target = getAdjacentBeat(direction);
  if (!target) return;
  currentGroupIndex = target.groupIndex;
  currentBeatIndex = target.beatIndex;
  currentPanelIndex = 0;
  render();

  const targetItems = getZoomItemsForBeat();
  zoomItemIndex = direction < 0 ? Math.max(0, targetItems.length - 1) : 0;
  renderZoomItem();
}

function jumpAdjacentBeatMain(direction) {
  const target = getAdjacentBeat(direction);
  if (!target) return;

  currentGroupIndex = target.groupIndex;
  currentBeatIndex = target.beatIndex;
  currentPanelIndex = 0;
  closeImageZoom();
  render();
}

function closeImageZoom() {
  imageZoom.classList.remove("open");
  imageZoom.setAttribute("aria-hidden", "true");
  document.body.classList.remove("image-zoom-open");
  imageZoomTitle.textContent = "";
  imageZoomTable.innerHTML = "";
}

function resolvePanelIcon(item) {
  const key = `${item.icon} ${item.title}`.toLowerCase();

  if (key.includes("chat") || key.includes("q&a") || key.includes("ask") || key.includes("says") || key.includes("conversation")) return "./assets/icons/panel-chat.png";
  if (key.includes("outside") || key.includes("external") || key.includes("global") || key.includes("2023") || key.includes("2024") || key.includes("2026")) return "./assets/icons/panel-globe.png";
  if (key.includes("case") || key.includes("rare") || key.includes("confusing") || key.includes("gap") || key.includes("review") || key.includes("verify")) return "./assets/icons/panel-search.png";
  if (key.includes("tool") || key.includes("coding") || key.includes("assistant") || key.includes("build") || key.includes("bicycle")) return "./assets/icons/panel-tool.png";
  if (key.includes("workflow") || key.includes("multi-step") || key.includes("agent") || key.includes("executes") || key.includes("process")) return "./assets/icons/panel-process.png";
  if (key.includes("govern") || key.includes("control") || key.includes("permission") || key.includes("sensitive") || key.includes("audit")) return "./assets/icons/panel-shield.png";
  if (key.includes("context") || key.includes("memory") || key.includes("understand") || key.includes("expectation") || key.includes("humans")) return "./assets/icons/panel-brain.png";
  if (key.includes("office") || key.includes("document") || key.includes("material") || key.includes("policy") || key.includes("draft")) return "./assets/icons/panel-document.png";
  if (key.includes("workspace") || key.includes("project") || key.includes("file") || key.includes("treasury")) return "./assets/icons/panel-folder.png";
  return "./assets/icons/panel-ai.png";
}

function renderTable(table) {
  const beat = groups[currentGroupIndex].beats[currentBeatIndex];
  const number = getKnowledgeNumber(currentGroupIndex, currentBeatIndex, (beat.panels || []).length);
  return `<article class="table-card">
    ${renderTableContent(table, number)}
  </article>`;
}

function renderTableContent(table, number = "", options = {}) {
  const headers = table.columns.map((column) => `<th class="${columnClass(column)}">${formatHeader(column)}</th>`).join("");
  const rows = table.rows
    .map((row) => `<tr>${row.map((cell, index) => `<td class="${columnClass(table.columns[index])}">${formatCell(cell, index)}</td>`).join("")}</tr>`)
    .join("");
  const header = options.hideHeader
    ? ""
    : `<p class="eyebrow">${table.kicker}</p>
    ${number ? numberBadge(number) : ""}
    <h3>${table.title}</h3>`;

  return `${header}
    <table class="matrix">
      <thead><tr>${headers}</tr></thead>
      <tbody>${rows}</tbody>
    </table>`;
}

function formatHeader(column) {
  if (typeof column === "object") {
    return `<span class="header-label">${renderTableIcon(column.icon)}<span>${column.label}</span></span>`;
  }

  return column;
}

function columnClass(column) {
  if (typeof column !== "object") return "";
  return column.kind ? `col-${column.kind}` : "";
}

function formatCell(cell, index) {
  if (typeof cell === "object") {
    if (cell.type === "icon") {
      return renderTableIcon(cell);
    }
    if (cell.type === "coverage") {
      return `<span class="coverage-cell"><span class="coverage-mark ${cell.value ? "yes" : "no"}">${cell.value ? "✓" : "×"}</span><span class="coverage-note">${cell.label}</span></span>`;
    }
    return cell.label;
  }

  if (index < 2) return cell;
  const key = String(cell).toLowerCase();
  if (key.includes("strong")) return `<span class="rating strong">Strong</span>`;
  if (key.includes("medium")) return `<span class="rating medium">Medium</span>`;
  if (key.includes("weak")) return `<span class="rating weak">Weak</span>`;
  if (key === "no") return `<span class="rating no">No</span>`;
  if (key.includes("limited")) return `<span class="rating medium">Limited</span>`;
  if (key.includes("depends")) return `<span class="rating medium">Depends</span>`;
  return cell;
}

function renderTableIcon(icon) {
  if (typeof icon === "object" && icon.type === "icon") {
    return `<img class="table-icon-img" src="${icon.src}" alt="${icon.alt || ""}" />`;
  }
  return `<span aria-hidden="true">${icon}</span>`;
}

function renderDetail(beat) {
  const selected = beat.panels?.[currentPanelIndex];
  if (selected) {
    detailCard.innerHTML = `<img class="detail-corner-icon" src="./assets/icons/current-panel.png" alt="" />
      <p class="eyebrow">Current panel</p>
      <h3>${selected.title}</h3>
      <ul>${selected.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`;
    return;
  }

  detailCard.innerHTML = `<img class="detail-corner-icon" src="./assets/icons/current-panel.png" alt="" />
    <p class="eyebrow">Current board</p>
    <h3>${beat.table.title}</h3>
    <ul>${beat.table.notes.map((note) => `<li>${note}</li>`).join("")}</ul>`;
}

function renderMiniMap(group) {
  miniMap.innerHTML = `<img class="mini-map-corner-icon" src="./assets/icons/mini-map.png" alt="" />
    <p class="eyebrow">Group mini-map</p>
    <h3>${group.title}</h3>
    ${group.beats
      .map(
        (beat, index) => `<div class="mini-item ${index === currentBeatIndex ? "active" : ""}">
          <span class="mini-dot"></span><span>${beat.title}</span>
        </div>`
      )
      .join("")}`;
}

function stepBeat(direction) {
  const allBeats = flattenBeats();
  const current = getGlobalBeatPosition();
  const next = Math.max(0, Math.min(allBeats.length - 1, current + direction));
  const target = allBeats[next];
  currentGroupIndex = target.groupIndex;
  currentBeatIndex = target.beatIndex;
  currentPanelIndex = 0;
  render();
}

function flattenBeats() {
  return groups.flatMap((group, groupIndex) => group.beats.map((beat, beatIndex) => ({ group, beat, groupIndex, beatIndex })));
}

function getGlobalBeatPosition() {
  return flattenBeats().findIndex((item) => item.groupIndex === currentGroupIndex && item.beatIndex === currentBeatIndex);
}

function getAdjacentBeat(direction) {
  const allBeats = flattenBeats();
  const current = getGlobalBeatPosition();
  return allBeats[current + direction] || null;
}


function resetPresentation() {
  closeImageZoom();
  currentGroupIndex = 0;
  currentBeatIndex = 0;
  currentPanelIndex = 0;
  document.body.classList.remove("nav-open");
  render();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen?.().catch(() => {});
    return;
  }
  document.exitFullscreen?.().catch(() => {});
}

function capabilityMatrix() {
  return {
    kicker: "Capability board",
    title: "What Different AI Tools Can Actually Do",
    columns: [
      { icon: tableIcon("label-tag", "label tag"), label: "Icon" },
      { icon: tableIcon("capability-puzzle", "capability puzzle"), label: "Capability" },
      { icon: tableIcon("chat-qa", "chat Q&A"), label: "Basic Chatbot" },
      { icon: tableIcon("copilot-web", "web AI assistant"), label: "Copilot Web Chat" },
      { icon: tableIcon("office-document", "office document"), label: "Copilot in Office" },
      { icon: tableIcon("policy-books", "policy books"), label: "Policy Chatbot" },
      { icon: tableIcon("project-folder", "project folder"), label: "Project Agentic AI" },
      { icon: tableIcon("ai-coding", "AI coding tools"), label: "AI Coding" }
    ],
    rows: [
      [tableIcon("chat-qa", "chat Q&A"), "Chat / Q&A", "Strong", "Strong", "Limited", "Strong", "Strong", "Strong"],
      [tableIcon("drafting-pencil", "drafting pencil"), "Drafting / rewriting", "Strong", "Strong", "Strong", "Limited", "Strong", "Strong"],
      [tableIcon("summary-note", "summary note"), "Summarization / translation", "Strong", "Strong", "Strong", "Limited", "Strong", "Strong"],
      [tableIcon("company-building", "company building"), "Company-approved environment", "Depends", "Strong", "Strong", "Strong", "Depends", "Depends"],
      [tableIcon("policy-books", "policy books"), "Internal policy material", "Weak", "Limited", "Limited", "Strong", "Strong", "Medium"],
      [tableIcon("office-document", "office document"), "Office document support", "Weak", "Medium", "Strong", "Weak", "Medium", "Medium"],
      [tableIcon("project-folder", "project folder"), "Manage a project workspace", "Weak", "Weak", "Medium", "Weak", "Strong", "Strong"],
      [tableIcon("cross-system-link", "cross-system link"), "Cross-system work", "Weak", "Weak", "Weak", "Weak", "Strong", "Strong"],
      [tableIcon("workflow-loop", "workflow loop"), "Multi-step workflows", "Weak", "Medium", "Medium", "Weak", "Strong", "Strong"],
      [tableIcon("ai-coding", "AI coding tools"), "Custom workflow tools", "No", "No", "No", "No", "Limited", "Strong"],
      [tableIcon("verification-check", "verification check"), "AI reviews AI output", "No", "Limited", "Limited", "No", "Medium", "Strong"],
      [tableIcon("audit-shield", "audit shield"), "Audit / governance readiness", "Weak", "Medium", "Medium", "Medium", "Strong", "Strong"]
    ],
    notes: ["Use capability names instead of hype labels.", "Copilot and chat tools are valuable, but they are not full workflow systems.", "AI Coding is special because it can create new workflow tools."]
  };
}

function vocabularyGuide() {
  return {
    kicker: "Vocabulary guide",
    title: "Name the Capability, Not the Hype",
    columns: [
      { icon: tableIcon("label-tag", "label tag"), label: "Icon" },
      { icon: tableIcon("warning-avoid", "warning triangle"), label: "Avoid Saying" },
      { icon: tableIcon("recommended-check", "recommended check"), label: "Recommended Name" },
      { icon: tableIcon("use-case-target", "use case target"), label: "Use When" }
    ],
    rows: [
      [tableIcon("chat-qa", "chat Q&A"), "AI", "Chat-based AI assistant", "The tool mainly answers, drafts, rewrites, summarizes, or translates."],
      [tableIcon("task-assistant", "task assistant robot"), "Agent", "Task assistant", "The tool helps with a task but does not run an execution loop."],
      [tableIcon("project-folder", "project folder"), "Agentic AI", "Project-managing agentic AI", "The system manages goals, files, tasks, tools, state, and verification."],
      [tableIcon("company-building", "company building"), "Company AI", "Internal policy chatbot", "The tool answers based on indexed internal documents."],
      [tableIcon("office-document", "office document"), "Copilot", "Office AI assistant", "The tool works mainly inside Microsoft Office files and communications."],
      [tableIcon("workflow-automation", "workflow automation"), "Automation", "Workflow automation", "The system follows defined steps and rules."],
      [tableIcon("ai-coding", "AI coding tools"), "AI tool", "AI-built workflow tool", "AI Coding creates a new small tool for a specific workflow."],
      [tableIcon("human-review", "human review"), "Human review", "AI-assisted verification", "A separate checker helps review routine AI output."]
    ],
    notes: ["Do not call every AI tool an agent.", "Precise vocabulary makes external conversations more professional.", "Capability names reduce wrong expectations."]
  };
}

function engineeringAgenda() {
  return {
    kicker: "Agenda board",
    title: "Three Engineerings: What Are We Really Designing?",
    columns: [
      { icon: tableIcon("label-tag", "label tag"), label: "Icon" },
      { icon: tableIcon("engineering-crane", "engineering crane"), label: "Engineering Type" },
      { icon: tableIcon("question-bubble", "question bubble"), label: "Main Question" },
      { icon: tableIcon("design-bricks", "design blocks"), label: "What You Design" },
      { icon: tableIcon("output-package", "output package"), label: "Typical Output" },
      { icon: tableIcon("limitation-roadblock", "roadblock limitation"), label: "Limitation" },
      { icon: tableIcon("workplace-desk", "workplace desk"), label: "Workplace Meaning" }
    ],
    rows: [
      [tableIcon("question-bubble", "question bubble"), "Prompt Engineering", "How should we ask?", "Role, format, tone, steps, constraints", "Better single answers", "Cannot create missing context or tools", "Basic AI literacy"],
      [tableIcon("context-brain", "context brain"), "Context Engineering", "What should AI know?", "Files, data, rules, examples, standards", "More relevant work output", "Needs clean material and access", "Business-ready AI use"],
      [tableIcon("harness-gear", "harness gear"), "Harness Engineering", "How should AI work inside the system?", "Tools, permissions, verification, logs, handoff", "Executable workflow system", "Needs process design and governance", "AI-enabled operations"]
    ],
    notes: ["The upgrade is not only asking better.", "The real upgrade is designing what AI knows, what AI can use, and how AI is governed.", "This agenda sets up the rest of Group 3."]
  };
}

function currentEnvironmentMatrix() {
  return {
    kicker: "Current environment board",
    title: "Current Internal AI vs Advanced AI Capabilities",
    columns: [
      { icon: tableIcon("label-tag", "label tag"), label: "Icon", kind: "meta" },
      { icon: tableIcon("capability-puzzle", "capability puzzle"), label: "Capability", kind: "meta" },
      { icon: tableIcon("copilot-web", "web AI assistant"), label: "Copilot Web Chat", kind: "current" },
      { icon: tableIcon("office-document", "office document"), label: "Copilot in Office", kind: "current" },
      { icon: tableIcon("policy-books", "policy books"), label: "Policy Chatbot", kind: "current" },
      { icon: tableIcon("current-coverage", "current coverage"), label: "Current Coverage", kind: "coverage" },
      { icon: tableIcon("project-folder", "project folder"), label: "Project Agentic AI", kind: "future" },
      { icon: tableIcon("ai-coding", "AI coding tools"), label: "AI Coding", kind: "future" }
    ],
    rows: [
      [tableIcon("chat-qa", "chat Q&A"), "General Q&A and drafting", "Strong", "Medium", "Limited", coverage(true, "Available"), "Strong", "Strong"],
      [tableIcon("office-document", "office document"), "Office document productivity", "Medium", "Strong", "Weak", coverage(true, "Available"), "Medium", "Medium"],
      [tableIcon("policy-books", "policy books"), "Internal policy Q&A", "Limited", "Limited", "Strong", coverage(true, "Available"), "Strong", "Medium"],
      [tableIcon("project-folder", "project folder"), "Project folder understanding", "Weak", "Weak", "Weak", coverage(false, "Not covered"), "Strong", "Strong"],
      [tableIcon("workflow-loop", "workflow loop"), "Multi-step process execution", "Weak", "Medium", "Weak", coverage(false, "Partial only"), "Strong", "Strong"],
      [tableIcon("cross-system-link", "cross-system link"), "Cross-system workflow", "Weak", "Weak", "Weak", coverage(false, "Not covered"), "Strong", "Strong"],
      [tableIcon("ai-coding", "AI coding tools"), "Build new business tools", "No", "No", "No", coverage(false, "Not covered"), "Limited", "Strong"],
      [tableIcon("verification-check", "verification check"), "Verification and audit trail", "Limited", "Limited", "Limited", coverage(false, "Limited"), "Strong", "Strong"],
      [tableIcon("best-role-target", "best role target"), "Best role", "Personal productivity", "Office assistance", "Policy Q&A", coverage(true, "Current state"), "Project coordination", "Custom tool building"]
    ],
    notes: ["Current internal tools are useful, but their role is narrower.", "They should not be positioned as project-managing agentic AI or AI Coding.", "Department-specific needs often require more tailored capability."]
  };
}

function coverage(value, label) {
  return { type: "coverage", value, label };
}

render();


