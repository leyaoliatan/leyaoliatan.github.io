window.COMM365 = {
  course: {
    code: "COMM 365",
    section: "203",
    title: "Market Research",
    term: "Winter 2026, Term 2 (January–April 2027)",
    schedule: "Mondays and Wednesdays, 5:00–6:30 pm",
    location: "TBA",
    instructor: "Leyao (Lia) Tan",
    email: "leyao.tan@sauder.ubc.ca",
    emailNote: "Please include [COMM 365] in the subject line.",
    intro: [
      "COMM 365 introduces the frameworks, terminology and tools of marketing research. Students learn to translate a management problem into a feasible research question, to weigh the value and limitations of widely used research methods, and to collect and analyze evidence that can inform a marketing decision.",
      "The course moves from qualitative research, surveys, observation and experiments to secondary data, data visualization with Tableau and AI agents, and statistical analysis in R. Lectures are combined with hands-on exercises and discussion, and teams carry a research project from proposal to final report and presentation."
    ],
    allDueTimes: "Unless otherwise noted, deliverables are due at 11:59 pm Pacific Time.",
    updated: "2026-11-18"
  },

  // Optional readings are shown up to and including this lecture number.
  readingsShownThrough: 1,

  // First and last day shown on the calendar.
  range: { start: "2027-01-04", end: "2027-04-18" },

  // type: lecture | presentation | guest | tba
  lectures: [
    { n: 1, week: 1, date: "2027-01-06", type: "lecture", title: "Introduction to Market Research",
      objectives: [
        "Explain how marketing research supports a decision under uncertainty.",
        "Turn a broad pricing decision into information needs and preliminary research questions.",
        "Distinguish primary and secondary evidence and identify measurement and sampling limitations.",
        "Discuss a recommendation that considers behavior, financial outcomes and consumer perceptions."
      ],
      readings: [
        { ref: "FIFA. (n.d.-a). <em>How does FIFA determine ticket prices for the FIFA World Cup 26?</em>", url: "https://gpcustomersupportfwc2026.tickets.fifa.com/hc/en-gb/articles/30201776314397-9-How-does-FIFA-determine-ticket-prices-for-the-FIFA-World-Cup-26" },
        { ref: "FIFA. (n.d.-b). <em>Sales phases.</em>", url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/sales-phases" },
        { ref: "Haws, K. L., &amp; Bearden, W. O. (2006). Dynamic pricing and consumer fairness perceptions. <em>Journal of Consumer Research, 33</em>(3), 304–311.", url: "https://doi.org/10.1086/508435" },
        { ref: "Uber. (n.d.). <em>How surge pricing works.</em>", url: "https://www.uber.com/us/en/drive/driver-app/how-surge-works/" }
      ] },
    { n: 2, week: 2, date: "2027-01-11", type: "lecture", title: "Research Questions and Research Types",
      objectives: [
        "Starting from a business problem, formulate focused marketing research questions and operational research objectives.",
        "Evaluate questions for focus, precision and decision value, using the 4Ps and 3Cs where useful.",
        "Distinguish exploratory, descriptive and causal research and explain how purpose influences method choice.",
        "Explain why observed associations alone do not establish causal effects."
      ],
      readings: [
        { ref: "AllTrails. (n.d.). <em>AllTrails Plus.</em>", url: "https://www.alltrails.com/plus/info" },
        { ref: "DataReportal. (n.d.). <em>Essential TikTok stats.</em> Retrieved September 14, 2026.", url: "https://datareportal.com/essential-tiktok-stats" },
        { ref: "FIFA. (n.d.). <em>How does FIFA determine ticket prices for the FIFA World Cup 26?</em>", url: "https://gpcustomersupportfwc2026.tickets.fifa.com/hc/en-gb/articles/30201776314397-9-How-does-FIFA-determine-ticket-prices-for-the-FIFA-World-Cup-26" },
        { ref: "Messerli, F. H. (2012). Chocolate consumption, cognitive function, and Nobel laureates. <em>New England Journal of Medicine, 367</em>(16), 1562–1564.", url: "https://doi.org/10.1056/NEJMon1211064" },
        { ref: "Meta. (2023, September 27). <em>Introducing the new Ray-Ban | Meta smart glasses.</em>", url: "https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/" },
        { ref: "Nielsen. (2014, August). <em>Listen up: Music and the multicultural consumer.</em>", url: "https://www.nielsen.com/insights/2014/listen-up-music-and-the-multicultural-consumer/" },
        { ref: "Rain or Shine Ice Cream. (n.d.). <em>Contact.</em>", url: "https://www.rainorshineicecream.com/contact" },
        { ref: "WOWA. (n.d.). <em>Vancouver housing market report.</em> Retrieved September 14, 2026.", url: "https://wowa.ca/vancouver-housing-market" }
      ] },
    { n: 3, week: 2, date: "2027-01-13", type: "lecture", title: "Focus Groups",
      objectives: [
        "Distinguish exploratory, descriptive and causal research purposes and select an appropriate method.",
        "Design a focus group around a clear information need and relevant participants.",
        "Use neutral prompts, probing questions and projective techniques to encourage discussion.",
        "Organize qualitative evidence using usage, competitor and benefit categories while preserving disagreement.",
        "Turn exploratory insights into focused research questions without claiming population estimates or causal effects."
      ],
      readings: [
        { ref: "Wolff, B., Mahoney, F., Lohiniva, A. L., &amp; Corkum, M. (2024, August 8). <em>Collecting and analyzing qualitative data.</em> Centers for Disease Control and Prevention.", url: "https://www.cdc.gov/field-epi-manual/php/chapters/qualitative-data.html" }
      ] },
    { n: 4, week: 3, date: "2027-01-18", type: "lecture", title: "Survey Design and Qualtrics",
      note: "In-class activity: Qualtrics survey.",
      objectives: [
        "Explain when surveys are useful and recognize limits of self-reported intentions and behaviour.",
        "Choose among in-person, telephone, mail and internet surveys using the population, task and practical constraints.",
        "Organize a questionnaire around consent, screening, core measures, classification questions and a closing message.",
        "Build a Qualtrics survey with appropriate question formats, random assignment, recorded conditions and conditional follow-up questions.",
        "Pretest survey paths and exported data before recruiting respondents."
      ],
      readings: [
        { ref: "Qualtrics. (n.d.-a). <em>Display logic.</em>", url: "https://www.qualtrics.com/support/survey-platform/survey-module/question-options/display-logic/" },
        { ref: "Qualtrics. (n.d.-b). <em>Randomizer.</em>", url: "https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/standard-elements/randomizer/" },
        { ref: "Qualtrics. (n.d.-c). <em>Survey flow.</em>", url: "https://www.qualtrics.com/support/survey-platform/survey-module/survey-flow/survey-flow-overview/" },
        { ref: "University of British Columbia Information Technology. (n.d.). <em>Survey tool.</em>", url: "https://it.ubc.ca/services/teaching-learning-tools/survey-tool" }
      ] },
    { n: 5, week: 3, date: "2027-01-20", type: "lecture", title: "Survey Errors and Measurement Scales",
      objectives: [
        "Distinguish sampling error from systematic errors caused by population specification and measurement.",
        "Diagnose surrogate-information, nonresponse, interviewer, response and processing errors and propose a practical fix.",
        "Classify variables as nominal, ordinal, interval or ratio using order, meaningful gaps and a meaningful zero.",
        "Match measurement scale to appropriate summaries and explain why ratio statements require a true zero.",
        "Critique survey questions for population coverage, wording, response options and respondent burden."
      ],
      readings: [
        { ref: "Stevens, S. S. (1946). On the theory of scales of measurement. <em>Science, 103</em>(2684), 677–680.", url: "https://doi.org/10.1126/science.103.2684.677" }
      ] },
    { n: 6, week: 4, date: "2027-01-25", type: "lecture", title: "Observational Studies",
      objectives: [
        "Decide when observation is more appropriate than asking respondents, especially for behavior and naturally occurring phenomena.",
        "Choose among natural versus contrived, disguised versus undisguised and human versus mechanical observation based on the research question.",
        "Explain the major tradeoffs of each observational design and distinguish observation from an experiment.",
        "Interpret marketing applications of mechanical observation such as eye tracking, digital traces and facial analysis without overstating what they reveal.",
        "Design a feasible observational study by specifying the behavior, target participants, setting and observation structure."
      ],
      readings: [
        { ref: "Allawati, S., McKay, D., Sanderson, M., Thomas, P., &amp; Trippas, J. R. (2026). An eye tracking study: Are AI overviews changing search behavior? <em>International ACM SIGIR Conference on Research and Development in Information Retrieval.</em>", url: "https://www.microsoft.com/en-us/research/publication/an-eye-tracking-study-are-ai-overviews-changing-search-behavior/" },
        { ref: "Yu, M., Chen, H., &amp; Dou, Y. (2023). Selling with emotion: How livestream influencers’ facial and verbal expressions drive mobile commerce sales. <em>SSRN Electronic Journal.</em>", url: "https://doi.org/10.2139/ssrn.4141860" }
      ] },
    { n: 7, week: 4, date: "2027-01-27", type: "lecture", title: "Experiment Design",
      objectives: [
        "Distinguish an association from a causal interpretation and identify alternative explanations.",
        "Specify the factor, treatments, assignment units, outcomes and controls in an experiment.",
        "Explain random assignment, including chance imbalance and the distinction from random sampling.",
        "Represent a comparison using R, X and O and choose a contrast appropriate to the outcome.",
        "Develop an implementable experimental protocol and assess internal and external validity."
      ],
      readings: [
        { ref: "Messerli, F. H. (2012). Chocolate consumption, cognitive function, and Nobel laureates. <em>New England Journal of Medicine, 367</em>(16), 1562–1564.", url: "https://doi.org/10.1056/NEJMon1211064" }
      ] },
    { n: 8, week: 5, date: "2027-02-01", type: "lecture", title: "Secondary Data",
      objectives: [
        "Describe the Toyota classroom outcomes with correct measures, denominators and uncertainty.",
        "Distinguish primary from secondary data and internal from external sources.",
        "Assess provenance, definitions, time, geography, population, access and relevance before using existing data.",
        "Interpret Google Trends as relative search interest and separate search from demand or purchases.",
        "Build a decision-focused evidence plan and specify a primary-data method for unresolved gaps."
      ],
      readings: [
        { ref: "Google. (n.d.). <em>FAQ about Google Trends data.</em>", url: "https://support.google.com/trends/answer/4365533?hl=en" },
        { ref: "University of British Columbia Library. (n.d.). <em>Business research</em> [Research guide].", url: "https://guides.library.ubc.ca/business" }
      ] },
    { n: 9, week: 5, date: "2027-02-03", type: "lecture", title: "Backward Market Research",
      objectives: [
        "Explain why a study should begin with the decision it will inform.",
        "Apply the four steps: decision use → final report → analysis → data.",
        "Translate the shuttle scenario into conditional actions without assuming that low bookings are caused by price.",
        "Construct dummy tables with explicit measures, eligible denominators, windows, costs and capacity.",
        "Distinguish booking from intention, association from causation, and external evidence from a local effect.",
        "Audit a project plan for missing data and identify the next feasible research step."
      ],
      readings: [
        { ref: "Andreasen, A. R. (1985, May). “Backward” market research. <em>Harvard Business Review.</em>", url: "https://hbr.org/1985/05/backward-market-research" }
      ] },
    { n: 10, week: 6, date: "2027-02-08", type: "presentation", title: "Project Proposal Presentation", draft: true,
      objectives: [
        "Present your team’s business problem, research questions, objectives and study design (5-minute presentation, 2-minute Q&A).",
        "Give and receive feedback on the feasibility of each research plan."
      ],
      readings: [] },
    { n: 11, week: 6, date: "2027-02-10", type: "lecture", title: "Data Visualization I: Principles and Methods", draft: true,
      prep: "Before class: watch the asynchronous videos “Introduction to Tableau”.",
      objectives: [
        "Identify the audience and the decision a figure should serve.",
        "Define the observation unit and denominator, and choose a chart form that fits the analytical task.",
        "Explain how scale, aggregation and uncertainty affect interpretation."
      ],
      readings: [] },
    { n: 12, week: 8, date: "2027-02-22", type: "lecture", title: "Data Visualization II: Tableau", draft: true,
      objectives: [
        "Inspect data types and granularity before building a view.",
        "Build a basic Tableau visualization or compact dashboard.",
        "Explain the aggregation and filters used, and check displayed values against the data."
      ],
      readings: [] },
    { n: 13, week: 8, date: "2027-02-24", type: "lecture", title: "Data Visualization III: AI Agents", draft: true,
      objectives: [
        "Give an AI agent an actionable visualization specification.",
        "Inspect what the agent calculated and detect unsupported or misleading results.",
        "Keep enough information to reproduce an accepted output."
      ],
      readings: [] },
    { n: 14, week: 9, date: "2027-03-01", type: "lecture", title: "Sampling and Descriptive Stats",
      objectives: [
        "Define the target population, frame, sample and respondent set for a research question.",
        "Distinguish simple random, stratified, cluster, convenience and snowball sampling using the Spotify and UBC examples.",
        "Explain why larger samples reduce random sampling variability but do not automatically remove bias.",
        "Interpret confidence intervals and calculate a clearly qualified margin-of-error or sample-size approximation.",
        "Read historical polling evidence with the correct population, period, denominator and outcome.",
        "Summarize categorical and numeric data using counts, proportions, centre and spread, with appropriate units and limitations."
      ],
      readings: [
        { ref: "American Association for Public Opinion Research. (2017). <em>An evaluation of 2016 election polls in the United States.</em>", url: "https://aapor.org/wp-content/uploads/2023/01/AAPOR-2016-Election-Polling-Report.pdf" },
        { ref: "National Institute of Standards and Technology. (n.d.). Confidence intervals. In <em>NIST/SEMATECH e-handbook of statistical methods</em>.", url: "https://www.itl.nist.gov/div898/handbook/prc/section2/prc241.htm" },
        { ref: "Statistics Canada. (n.d.). <em>Probability sampling.</em>", url: "https://www150.statcan.gc.ca/n1/edu/power-pouvoir/ch13/prob/5214899-eng.htm" }
      ] },
    { n: 15, week: 9, date: "2027-03-03", type: "lecture", title: "R Lab", draft: true,
      prep: "Before class: install R and RStudio and complete the first lessons on basic R syntax and objects.",
      objectives: [
        "Set up R and RStudio and run a script.",
        "Import, inspect and summarize a dataset in R.",
        "Produce basic descriptive statistics and plots in R."
      ],
      readings: [] },
    { n: 16, week: 10, date: "2027-03-08", type: "lecture", title: "Hypothesis Testing I", draft: true,
      objectives: [
        "State null and alternative hypotheses for a marketing question.",
        "Explain test statistics, p-values, significance levels and Type I and Type II errors.",
        "Conduct and interpret a one-sample test in R."
      ],
      readings: [] },
    { n: null, week: 10, date: "2027-03-10", type: "tba", title: "TBA",
      objectives: [], readings: [] },
    { n: 17, week: 11, date: "2027-03-15", type: "lecture", title: "Hypothesis Testing II", draft: true,
      objectives: [
        "Compare two groups using t-tests and tests of proportions.",
        "Test the association between categorical variables with a chi-square test.",
        "Interpret test results in terms of the business decision."
      ],
      readings: [] },
    { n: 18, week: 11, date: "2027-03-17", type: "lecture", title: "Linear Correlation", draft: true,
      objectives: [
        "Describe linear relationships with scatterplots and the correlation coefficient.",
        "Test whether a correlation differs from zero.",
        "Explain why correlation alone does not establish causation."
      ],
      readings: [] },
    { n: 19, week: 12, date: "2027-03-22", type: "lecture", title: "Recommendation System", draft: true,
      objectives: [
        "Explain how recommender systems use customer and product data.",
        "Compare content-based and collaborative filtering approaches.",
        "Discuss how recommendations are evaluated, including concerns about bias."
      ],
      readings: [] },
    { n: 20, week: 12, date: "2027-03-24", type: "lecture", title: "Linear Regression", draft: true,
      objectives: [
        "Specify and estimate simple and multiple linear regressions in R.",
        "Interpret coefficients, R-squared and statistical significance.",
        "Use a regression model to answer a marketing question and state its limitations."
      ],
      readings: [] },
    { n: null, week: 13, date: "2027-03-31", type: "tba", title: "TBA",
      objectives: [], readings: [] },
    { n: 21, week: 14, date: "2027-04-05", type: "lecture", title: "Final Review", draft: true,
      objectives: [
        "Review the key concepts and methods of the course.",
        "Practice exam-style questions."
      ],
      readings: [] },
    { n: 22, week: 14, date: "2027-04-07", type: "presentation", title: "Final Presentation", draft: true,
      objectives: [
        "Present your team’s research findings and recommendations (12-minute presentation, 3-minute Q&A)."
      ],
      readings: [] },
    { n: 23, week: 15, date: "2027-04-12", type: "presentation", title: "Final Presentation", draft: true,
      objectives: [
        "Present your team’s research findings and recommendations (12-minute presentation, 3-minute Q&A)."
      ],
      readings: [] }
  ],

  // Deliverables. time defaults to 11:59 pm unless given.
  deadlines: [
    { date: "2027-01-13", title: "Group sign-up", time: "before class", kind: "group" },
    { date: "2027-01-20", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-01-27", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-01-30", title: "Research ethics (TCPS 2) certificate", kind: "individual" },
    { date: "2027-02-03", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-02-06", title: "IA1: Secondary data", kind: "individual" },
    { date: "2027-02-10", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-02-13", title: "GA1: Written proposal and peer evaluation 1", kind: "group" },
    { date: "2027-02-24", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-02-27", title: "IA2: Tableau exercise", kind: "individual" },
    { date: "2027-03-03", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-03-10", title: "Project progress survey", time: "end of class, due 11:59 pm", kind: "survey" },
    { date: "2027-03-13", title: "IA3: Introduction to R", kind: "individual" },
    { date: "2027-03-15", title: "GA2: Data collection checkpoint", time: "before class", kind: "group" },
    { date: "2027-03-20", title: "IA4: Hypothesis testing", kind: "individual" },
    { date: "2027-03-27", title: "IA5: Regression", kind: "individual" },
    { date: "2027-04-15", title: "GA2: Final report and peer evaluation 2", kind: "group" }
  ],

  // Days without class and other dates worth marking.
  noClass: [
    { start: "2027-02-15", end: "2027-02-19", title: "Midterm break (Feb 15 is Family Day)" },
    { start: "2027-03-26", end: "2027-03-26", title: "Good Friday, university closed" },
    { start: "2027-03-29", end: "2027-03-29", title: "Easter Monday, university closed" }
  ],
  special: []
};
