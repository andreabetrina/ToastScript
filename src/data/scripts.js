export const scriptsData = [
  {
    id: "tmod",
    title: "Toastmaster of the Day",
    category: "Meeting Leaders",
    description: "The host, director, and master of ceremonies of the meeting. Guide transitions and keep the energy high.",
    icon: "🎙️",
    color: "#772432", // Burgundy
    introduction: "As the Toastmaster of the Day (TMOD), you are the meeting's master of ceremonies. Your primary duty is to ensure the meeting runs smoothly, stays on time, and maintains a warm, professional atmosphere.",
    responsibilities: [
      "Prepare the meeting agenda in advance.",
      "Introduce the meeting theme and set a welcoming tone.",
      "Introduce the roleplayers (Timer, Grammarian, Ah-Counter, General Evaluator) and transition between segments.",
      "Smoothly introduce prepared speakers and coordinate evaluation segments.",
      "Conclude the meeting and hand control back to the Club President."
    ],
    quickTips: [
      "Keep transitions brief (30-60 seconds) to ensure the meeting stays on schedule.",
      "Lead the applause whenever a speaker takes or leaves the stage.",
      "Prepare a few remarks related to the theme to fill any unexpected gaps.",
      "Always remain standing at the lectern/camera until the speaker you introduce arrives, shake hands (or nod digitally), and then take your seat."
    ],
    placeholders: [
      { key: "theme", label: "Meeting Theme", placeholder: "Resilience", type: "text" },
      { key: "wordOfDay", label: "Word of the Day", placeholder: "Fortitude", type: "text" },
      { key: "timerName", label: "Timer Name", placeholder: "John Doe", type: "text" },
      { key: "ahCounterName", label: "Ah-Counter Name", placeholder: "Sarah Smith", type: "text" },
      { key: "grammarianName", label: "Grammarian Name", placeholder: "David Lee", type: "text" },
      { key: "geName", label: "General Evaluator Name", placeholder: "Emily Davis", type: "text" },
      { key: "topicsMasterName", label: "Table Topics Master Name", placeholder: "Michael Johnson", type: "text" },
      { key: "speaker1", label: "Speaker 1 Name", placeholder: "Alice Brown", type: "text" },
      { key: "speech1Title", label: "Speech 1 Title", placeholder: "Finding My Voice", type: "text" }
    ],
    script: `### 1. Meeting Opening & Welcome

"Good evening/afternoon, fellow Toastmasters and honored guests! Welcome to today's meeting of the SMCE Toastmasters Club.

For those who don't know me, my name is **[Your Name]**, and I am honored to serve as your Toastmaster of the Day.

The theme for today's meeting is **{theme}**. When we think about **{theme}**, we think about growth, challenge, and opportunity. Throughout today's meeting, I encourage everyone to reflect on how this theme applies to their own personal and professional journeys.

---

### 2. Introducing the Helper Team

Before we begin the prepared speeches, let us introduce the team of roleplayers who will help us monitor the quality and timing of our meeting.

First, to help us keep track of time, please welcome our Timer for today, **{timerName}**, to explain the timing guidelines."

*(Wait for {timerName} to present, then lead applause)*

"Thank you, **{timerName}**.

Next, to help us monitor our use of filler words, please welcome our Ah-Counter, **{ahCounterName}**, to explain their role."

*(Wait for {ahCounterName} to present, then lead applause)*

"Thank you, **{ahCounterName}**.

Now, please welcome our Grammarian, **{grammarianName}**, who will introduce the Word of the Day and explain the grammar evaluations."

*(Wait for {grammarianName} to present, then lead applause)*

"Thank you, **{grammarianName}**. The Word of the Day is **{wordOfDay}**. Let's try to use it as much as possible throughout our speeches today!

---

### 3. Toastmaster Segment: Prepared Speeches

We will now begin the first major segment of our meeting: Prepared Speeches. This is where members deliver speeches based on their selected Pathways projects.

Our first speaker today is **{speaker1}**, delivering a speech titled **"{speech1Title}"**. 

Please join me in welcoming **{speaker1}** to the stage with **"{speech1Title}"**! **{speaker1}**!"

*(Lead the applause, stand and shake hands/nod, then sit)*
*(After the speech concludes)*

"Thank you, **{speaker1}**, for that inspiring speech! Let us take one minute of silence for everyone to write down helpful feedback for the speaker. Timer, please let us know when one minute is up."

*(Wait for Timer)*

"Thank you, Timer. 

---

### 4. Toastmaster Segment: Table Topics

We will now move to our next segment: Table Topics. This is the impromptu speaking portion of the meeting, designed to help us think and speak on our feet.

To lead this segment, please welcome our Table Topics Master, **{topicsMasterName}**!"

*(Lead applause, hand over control)*
*(After Table Topics segment finishes and control is handed back)*

"Thank you, **{topicsMasterName}**, for that engaging session! It was wonderful to see so many speakers rise to the challenge.

---

### 5. Toastmaster Segment: Evaluation & Closing

We will now begin the Evaluation segment of our meeting, which is critical for our learning and development. 

To lead this segment, please welcome our General Evaluator, **{geName}**!"

*(Lead applause, hand over control)*
*(After General Evaluator finishes and hands control back to you)*

"Thank you, **{geName}**, and your entire evaluation team for those detailed insights. Feedback is indeed the breakfast of champions.

This brings our meeting to a close. I want to thank all our speakers, evaluators, and helpers for making today's meeting successful. Today, we truly experienced **{theme}** in action!

I will now hand control of the meeting back to our Club President for announcements and closing remarks. Thank you!"`
  },
  {
    id: "timer",
    title: "Timer",
    category: "Meeting Helpers",
    description: "Track the duration of speeches, table topics, and evaluations, and show timing cards (Green, Yellow, Red).",
    icon: "⏱️",
    color: "#2e7d32", // Green
    introduction: "As the Timer, you help speakers develop the vital skill of speaking within a designated timeframe. You keep the meeting on schedule by displaying visual timing cues (green, yellow, and red cards or lights).",
    responsibilities: [
      "Explain the timing rules at the start of the meeting.",
      "Accurately track elapsed time for all speakers, table topics respondents, and evaluators.",
      "Display the timing indicators (Green, Yellow, Red) at the designated times.",
      "Record speaking times and present the Timer's Report during the evaluation portion."
    ],
    quickTips: [
      "Make sure your camera/background or physical cards are clearly visible to the speaker.",
      "Leave the Red signal active until the speaker finishes speaking.",
      "Do not make noise or sound alarms when showing cards, unless explicitly instructed for specific speech contests."
    ],
    placeholders: [
      { key: "speakerCount", label: "Number of Speakers", placeholder: "3", type: "number" }
    ],
    script: `### 1. Explaining the Role (At the beginning of the meeting)

"Thank you, Mr./Madam Toastmaster, fellow Toastmasters, and welcomed guests.

As the Timer, it is my duty to help our speakers monitor their speaking time so they can express their ideas effectively within their designated limits.

*   For **Prepared Speeches** (which are usually 5 to 7 minutes):
    *   I will show the **Green** signal at **5 minutes**.
    *   I will show the **Yellow** signal at **6 minutes**.
    *   I will show the **Red** signal at **7 minutes**.
    *   Speakers have a 30-second grace period after 7 minutes to wrap up.
*   For **Table Topics** (impromptu speeches of 1 to 2 minutes):
    *   I will show the **Green** signal at **1 minute**.
    *   I will show the **Yellow** signal at **1 minute and 30 seconds**.
    *   I will show the **Red** signal at **2 minutes**.
    *   To qualify for voting, speakers must speak for at least 1 minute, with a 30-second grace period at the end.
*   For **Speech Evaluations** (which are 2 to 3 minutes):
    *   I will show the **Green** signal at **2 minutes**.
    *   I will show the **Yellow** signal at **2 minutes and 30 seconds**.
    *   I will show the **Red** signal at **3 minutes**.
    *   There is a 30-second grace period to finish.

I will record the exact times for each speaker and present the Timer's Report when called upon by the General Evaluator later in the meeting. Back to you, Toastmaster of the Day."

---

### 2. Presenting the Timer's Report (When called by General Evaluator)

"Thank you, Mr./Madam General Evaluator. Here is the Timer's Report for today's meeting:

*   For the **Prepared Speeches** segment:
    *   **[Speaker 1 Name]** spoke for **[Minutes]** minutes and **[Seconds]** seconds.
    *   **[Speaker 2 Name]** spoke for **[Minutes]** minutes and **[Seconds]** seconds.
*   For the **Table Topics** segment:
    *   **[Name 1]** spoke for **[Time]**
    *   **[Name 2]** spoke for **[Time]**
    *   *(List all who qualified/disqualified if voting)*
*   For the **Evaluators** segment:
    *   **[Evaluator 1 Name]** spoke for **[Time]**
    *   **[Evaluator 2 Name]** spoke for **[Time]**

All speakers who met the timing requirements are qualified for the awards. Back to you, General Evaluator."`
  },
  {
    id: "ah_counter",
    title: "Ah-Counter",
    category: "Meeting Helpers",
    description: "Note and track filler words, sounds, and repetitive phrases (like ah, um, err, you know, so, like) used by speakers.",
    icon: "📊",
    color: "#6a1b9a", // Purple
    introduction: "As the Ah-Counter, you note filler words, inappropriate pauses, and repetitive vocal habits. Your feedback helps members speak with greater clarity, eliminating words that distract from their message.",
    responsibilities: [
      "Explain the purpose of tracking filler words at the start of the meeting.",
      "Actively listen to all speakers and note words like 'ah', 'um', 'er', 'so', 'like', 'you know'.",
      "Note double-starts (e.g. 'I... I want to say') and long empty pauses.",
      "Summarize and present the tally counts during the General Evaluator's report segment."
    ],
    quickTips: [
      "Focus on patterns rather than minor slips; if a speaker uses 'like' 30 times, it is a habit they need to break.",
      "Deliver your report with kindness and encouragement. The goal is self-awareness, not embarrassment."
    ],
    placeholders: [
      { key: "mostFrequentFiller", label: "Most Frequent Filler Word", placeholder: "Um", type: "text" }
    ],
    script: `### 1. Explaining the Role (At the beginning of the meeting)

"Thank you, Mr./Madam Toastmaster, fellow Toastmasters, and guests.

The purpose of the Ah-Counter is to note words and sounds that are used as a 'crutch' or 'filler' by anyone who speaks during the meeting. 

During the meeting, I will listen for overused words, including **'and', 'well', 'but', 'so', and 'like'**. I will also listen for filler sounds, such as **'ah', 'um', and 'er'**. Additionally, I will note repetitive phrases, such as **'you know'** or double-starts where a speaker starts a sentence over again.

By becoming aware of these filler words, we can practice using silence or pauses instead, which adds power to our speeches.

I will keep a tally of these sounds for all speakers and present my report at the end of the meeting when requested. Back to you, Toastmaster of the Day."

---

### 2. Presenting the Ah-Counter Report (When called by General Evaluator)

"Thank you, Mr./Madam General Evaluator. 

I have observed our speakers today and recorded the use of filler words. Overall, the club did a wonderful job, but we had a few common filler habits. The most frequent filler word today was **'{mostFrequentFiller}'**.

Here is the detailed report:
*   **[Speaker Name/Role]** used **[Count]** 'ums' and **[Count]** 'ahs'.
*   **[Speaker Name/Role]** had **[Count]** double-starts.
*   **[Speaker Name/Role]** did an excellent job with a completely clean, filler-free speech! *(Praise the 'Ah-Counter champions')*

I hope this tally helps you notice your vocal habits. Remember, a pause is always better than an 'um'. Back to you, General Evaluator."`
  },
  {
    id: "grammarian",
    title: "Grammarian & Word Master",
    category: "Meeting Helpers",
    description: "Introduce the Word of the Day, monitor vocabulary, and note both outstanding and incorrect grammar usage.",
    icon: "✍️",
    color: "#00695c", // Teal
    introduction: "The Grammarian plays an essential role in helping members improve their command of the language. You introduce the Word of the Day to expand members' vocabulary, and note grammar highlights and slips.",
    responsibilities: [
      "Select and introduce the Word of the Day (definition, usage, and part of speech).",
      "Monitor the use of the Word of the Day by all speakers.",
      "Listen for exceptional use of language (metaphors, alliteration, strong verbs).",
      "Listen for grammatical errors, run-on sentences, or awkward phrasing, and offer correct alternatives."
    ],
    quickTips: [
      "Choose a Word of the Day that is practical and relates to the theme, rather than something too obscure.",
      "Write the word, part of speech, and definition in a visible place (or Zoom chat) so speakers can refer to it.",
      "Celebrate creative phrases! Grammarian reports should highlight good usage just as much as errors."
    ],
    placeholders: [
      { key: "word", label: "Word of the Day", placeholder: "Resilient", type: "text" },
      { key: "partOfSpeech", label: "Part of Speech", placeholder: "Adjective", type: "text" },
      { key: "definition", label: "Definition", placeholder: "Able to withstand or recover quickly from difficult conditions", type: "text" },
      { key: "example", label: "Example Sentence", placeholder: "She was resilient in the face of setbacks.", type: "text" }
    ],
    script: `### 1. Explaining the Role & Introducing the Word of the Day

"Thank you, Mr./Madam Toastmaster, fellow Toastmasters, and welcomed guests.

As the Grammarian, it is my responsibility to monitor the use of the English language during today's meeting. I will listen carefully to all speakers, noting any creative or outstanding uses of language, as well as any improper grammar, pronunciation errors, or awkward phrasing.

It is also my duty to introduce the **Word of the Day**. 

For today's meeting, the Word of the Day is: **{word}**.
It is a/an **{partOfSpeech}**.
It is defined as: **"{definition}"**.

An example of using this word is:
*"{example}"*

I encourage all speakers, table topics respondents, and evaluators to incorporate **{word}** into their speeches. Whenever a speaker uses the Word of the Day, let's show our support by clicking the thumbs up reaction (or tapping our desks/applauding silently).

I will keep track of who uses the Word of the Day and how, and I will present my report when called upon during the evaluation segment. Back to you, Toastmaster of the Day."

---

### 2. Presenting the Grammarian Report (When called by General Evaluator)

"Thank you, Mr./Madam General Evaluator. 

It was a pleasure listening to the rich use of language in our meeting today. 

First, regarding the **Word of the Day**, **{word}**, it was used a total of **[Count]** times! I would like to congratulate **[Names of members who used it]** for successfully incorporating it into their speeches.

Next, I noted several examples of **outstanding language and rhetoric**:
*   **[Speaker Name]** used a beautiful metaphor: *"[Quote]"*.
*   **[Speaker Name]** used excellent alliteration: *"[Quote]"*.

Finally, here are a few **suggestions for grammatical improvement**:
*   Instead of saying *"[Incorrect/Awkward Phrase]"*, it would be grammatically cleaner to say: *"[Corrected Phrase]"*.
*   Instead of *"[Phrase 2]"*, consider saying: *"[Alternative]"*.

Overall, it was a fantastic display of communication. Thank you, and back to you, General Evaluator."`
  },
  {
    id: "topics_master",
    title: "Table Topics Master",
    category: "Meeting Leaders",
    description: "Conduct the impromptu speaking portion of the meeting, encouraging speakers to think on their feet.",
    icon: "❓",
    color: "#004165", // Navy Blue
    introduction: "The Table Topics Master runs the impromptu speaking session. You prepare a series of prompts or questions related to the theme and invite members (and willing guests) to speak for 1 to 2 minutes without preparation.",
    responsibilities: [
      "Prepare 5-8 topics or questions centered around the meeting theme.",
      "Explain the rules of Table Topics (1-2 minutes duration, try to use the Word of the Day).",
      "Select speakers, prioritizing members without meeting roles, followed by guests who give consent.",
      "Maintain a lively, low-pressure atmosphere that encourages participation."
    ],
    quickTips: [
      "State the topic/question *first*, then call the speaker's name. This gets everyone thinking about how they would answer.",
      "Avoid complex, multi-layered questions. Keep them open-ended so the speaker has room to navigate.",
      "Check with guests before the meeting or during a break to see if they'd like to participate in Table Topics."
    ],
    placeholders: [
      { key: "topicTheme", label: "Table Topics Theme", placeholder: "Life Lessons", type: "text" },
      { key: "sampleQuestion", label: "Sample Question 1", placeholder: "What is a setback that taught you a valuable lesson?", type: "text" }
    ],
    script: `### 1. Explaining the Session & Rules

"Thank you, Mr./Madam Toastmaster! 

Fellow Toastmasters and guests, welcome to the Table Topics segment of our meeting. 

One of the most common situations in professional and everyday life is impromptu speaking—whether it's answering an unexpected question from your boss, speaking at a networking event, or giving an impromptu toast. Table Topics is designed to help us practice thinking on our feet, structuring a response quickly, and speaking with confidence.

The rules are simple:
1.  I will present a prompt or question related to today's theme, **{topicTheme}**.
2.  I will invite a speaker to respond.
3.  Your speech should last between **1 to 2 minutes**.
4.  Our Timer will show the Green card at 1 minute, Yellow at 1.5 minutes, and Red at 2 minutes. You have until 2 minutes and 30 seconds to conclude.
5.  I highly encourage you to use our Word of the Day in your response.

Let's begin! 

---

### 2. Presenting Topics & Calling Speakers

Here is the first question:
**"{sampleQuestion}"**

Who would like to take this topic? Let's welcome our first volunteer: **[Speaker Name]**!"

*(Lead applause, welcome the speaker, listen, then lead applause when they finish)*

"Thank you, **[Speaker Name]**. That was a wonderful perspective on **{topicTheme}**!

*(Repeat for subsequent topics)*

---

### 3. Concluding Table Topics

"That concludes our Table Topics segment for today! Thank you to everyone who participated. 

Timer, could you please confirm which speakers met the timing requirements and are qualified for the vote?"

*(Wait for Timer)*

"Thank you, Timer. Everyone, please cast your vote for the **Best Table Topics Speaker** using the private chat / voting slips. 

I will now hand control of the meeting back to our Toastmaster of the Day!"`
  },
  {
    id: "general_evaluator",
    title: "General Evaluator",
    category: "Meeting Leaders",
    description: "Evaluate the meeting overall, lead the evaluation team, and call for helper reports.",
    icon: "🔍",
    color: "#e65100", // Dark Orange
    introduction: "As the General Evaluator (GE), you review the meeting structure, room setup, and quality of evaluations. You manage the evaluation team, call for reports from the Timer, Ah-Counter, and Grammarian, and provide feedback on how the club can improve.",
    responsibilities: [
      "Observe the meeting from start to finish, noting organization, timing, and atmosphere.",
      "Introduce the speech evaluators and facilitate the evaluation segment.",
      "Call on the Grammarian, Ah-Counter, and Timer for their final reports.",
      "Deliver a constructive, comprehensive evaluation of the meeting as a whole."
    ],
    quickTips: [
      "Arrive early to ensure the setup (physical room or Zoom link) is ready.",
      "Take detailed notes throughout the meeting on things that went well and areas for improvement.",
      "Ensure evaluations remain positive and constructive."
    ],
    placeholders: [
      { key: "evaluator1Name", label: "Evaluator 1 Name", placeholder: "John Doe", type: "text" },
      { key: "speaker1Name", label: "Speaker 1 Name", placeholder: "Alice Brown", type: "text" }
    ],
    script: `### 1. Opening the Evaluation Segment

"Thank you, Mr./Madam Toastmaster!

Fellow Toastmasters and guests, we are now entering the evaluation portion of our meeting. Evaluation is the cornerstone of the Toastmasters program. It is how we learn, correct our mistakes, and build upon our strengths.

My job as General Evaluator is to evaluate how the meeting was conducted overall, and to lead the evaluation team in delivering their feedback.

We will begin with our prepared speech evaluations. 

Our first evaluator is **{evaluator1Name}**, who will be evaluating the speech given by **{speaker1Name}**. 

Please welcome **{evaluator1Name}** to the stage!"

*(Lead applause, sit, and listen)*
*(Repeat for other evaluators)*

"Thank you, **{evaluator1Name}**, for that constructive evaluation.

---

### 2. Calling for Helper Reports

Now, I would like to call upon our helper team to present their final reports. 

First, let's hear the Timer's Report. Please welcome our Timer, **[Timer Name]**."

*(Wait for Timer, lead applause)*

"Thank you, **[Timer Name]**.

Next, let's hear the Ah-Counter's Report. Please welcome our Ah-Counter, **[Ah-Counter Name]**."

*(Wait for Ah-Counter, lead applause)*

"Thank you, **[Ah-Counter Name]**.

Finally, let's hear the Grammarian's Report. Please welcome our Grammarian, **[Grammarian Name]**."

*(Wait for Grammarian, lead applause)*

"Thank you, **[Grammarian Name]** for that detailed analysis.

---

### 3. General Evaluator's Meeting Review

"I will now share my evaluation of today's meeting.

*   **Meeting Setup:** The meeting started **[on time/a few minutes late]**. The room/link was set up efficiently, and the officer team welcomed guests warmly.
*   **Toastmaster of the Day:** **[TMOD Name]** did an outstanding job hosting. The transitions were **[smooth/a bit rushed]**, and the theme was woven in beautifully.
*   **Table Topics:** The session was lively, and the questions were creative. **[Topics Master Name]** did a great job involving guests.
*   **Evaluators:** The evaluations today were highly constructive, using the sandwich method (praise-suggest-praise) effectively.

One recommendation for our club: **[Provide 1 actionable suggestion, e.g., 'let us work on starting evaluations exactly on time' or 'ensure the lectern is never left unattended']**.

Thank you to my team of helpers. This concludes the evaluation segment. Back to you, Toastmaster of the Day!"`
  },
  {
    id: "evaluator",
    title: "Speech Evaluator",
    category: "Evaluators",
    description: "Provide positive and constructive feedback to a specific prepared speaker, based on their project objectives.",
    icon: "🤝",
    color: "#546e7a", // Slate Grey
    introduction: "As a Speech Evaluator, you provide immediate, constructive feedback to a member who delivered a prepared speech. You highlight what they did well and suggest 1-2 specific areas for improvement, helping them grow.",
    responsibilities: [
      "Contact the speaker before the meeting to review their project objectives and any specific goals.",
      "Listen carefully to the speech, taking notes on structure, delivery, vocal variety, and gestures.",
      "Deliver a 2-to-3 minute evaluation speech using the 'Sandwich Method' (praise, constructive suggestion, encouragement).",
      "Complete the evaluation form in the speaker's Pathways portal."
    ],
    quickTips: [
      "Use 'I' statements (e.g. 'I felt connected when you...' rather than 'You should have...'). This makes the feedback feel more personal and less judgmental.",
      "Focus on the speaker's project goals. If they are practicing vocal variety, focus your feedback on that aspect.",
      "Provide specific, actionable suggestions. Instead of 'work on body language', suggest 'use a wider hand gesture when describing the mountain peak'."
    ],
    placeholders: [
      { key: "speakerName", label: "Speaker Name", placeholder: "Alice Brown", type: "text" },
      { key: "speechTopic", label: "Speech Topic/Title", placeholder: "Finding My Voice", type: "text" },
      { key: "strength1", label: "Key Strength observed", placeholder: "Excellent eye contact and confidence", type: "text" },
      { key: "improvement1", label: "Area for Improvement", placeholder: "Use more vocal variety during transitions", type: "text" },
      { key: "challenge", label: "Next Level Challenge", placeholder: "Incorporate purposeful stage movement", type: "text" }
    ],
    script: `### 1. Opening the Evaluation (Stating Objectives)

"Thank you, Mr./Madam General Evaluator, fellow Toastmasters, and especially **{speakerName}**.

The purpose of my evaluation today is to review **{speakerName}**'s speech, entitled **"{speechTopic}"**, and help them understand what worked well and what could be polished for their next project. 

The objectives of this project were to **[state project objectives, e.g., practice vocal variety / connect with the audience]**.

---

### 2. The Feedback (The "Sandwich" Method)

**What Went Well (Praise):**
"**{speakerName}**, what I loved about your speech was **{strength1}**. 

Right from your opening statement, you had my attention because **[details of why the strength was effective]**. Furthermore, your structure was clear, which made it very easy to follow your message.

**Room for Improvement (Suggest):**
To make your speech even more impactful and take it to the next level, I would suggest focusing on **{improvement1}**. 

For example, when you reached the emotional climax of your speech, you could have **[provide a specific, physical example of how to implement the suggestion]**. This would have created a stronger impact and allowed the audience to digest the transition.

**The Challenge / Next Level (Encourage):**
My challenge for you in your next speech is to **{challenge}**. This will push you out of your focus on **{improvement1}**.

---

### 3. Conclusion & Summary

To summarize:
*   You displayed great strength in **{strength1}**.
*   Consider polishing your delivery by focusing on **{improvement1}**.
*   And try the challenge of **{challenge}** for your next speech.

Thank you, **{speakerName}**, for a wonderful speech. I look forward to your next presentation! Back to you, General Evaluator."`
  }
];
