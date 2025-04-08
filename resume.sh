#!/bin/bash

resume_file="zack_johnson_resume.md"
cat > $resume_file <<EOF
---
geometry: top=0.5in, bottom=0.5in, left=0.75in, right=0.75in
fontsize: 11pt
mainfont: Liberation Sans
documentclass: article
output: pdf
header-includes:
  - \pagestyle{empty}  
---
\begin{center}
    \Huge \textbf{Zack Johnson} \\
    \vspace{0.5em}
    \large Animation, Storyboards, Visual Development
\end{center}
\begin{center}
    \texttt{http://ZackDraws.com} \\
    \texttt{ZackJohnsonArt@gmail.com} \\
    \texttt{#####}  
\end{center}
\vspace{1em}
\noindent
\textbf{\huge Education}
\begin{itemize}
    \item \textbf{Laguna College of Art and Design} - BFA (Animation) \\
    Graduation Year: 2020
\end{itemize}

\vspace{1em}

\noindent
\textbf{\huge Experience}
\begin{itemize}
    \item \textbf{Shuh Chih Art Studio, Art Teacher} \hfill (September 2024 - December 2024) \\
    Taught students how to build their portfolios and develop their artistic skills.
    
    \item \textbf{The Artist Lab, Art Teacher} \hfill (January 2023 - Present) \\
    Developed animation curriculum and taught both animation and mixed media classes.
    
    \item \textbf{Art Space, Art Teacher} \hfill (January 2023 - May 2023) \\
    Taught animation and mixed media classes, focusing on traditional and digital techniques.
    
    \item \textbf{Desert Mayhem Overdrive, 2D Animator} \hfill (2022) \\
    Contributed to the animation process in Toon Boom Harmony as part of an extended crew.
    
    \item \textbf{New Vision Entertainment, Storyboard Artist} \hfill (2022) \\
    Created storyboards for various animation projects, developing visual narratives.
    
    \item \textbf{2D Clean-up Animator, Moving Colour} \hfill (2020) \\
    Worked on clean-up animation using Toon Boom Harmony.
    
    \item \textbf{Co-director, Duet Short Film} \hfill (2019) \\
    Co-directed a short film with a team of eight students. Involved in animation, story, visual development, and character design.
    
    \item \textbf{Director, Chomped Short Film} \hfill (2019) \\
    Directed a stop-motion short film with a team of eight students.
    
    \item \textbf{Animation and Story, Mamirhezabee} \hfill (2019) \\
    Contributed to animation and story development for the short film Mamirhezabee.
\end{itemize}
\vspace{1em}
\noindent
\textbf{\huge Software}
\begin{itemize}
    \item TVPaint
    \item ToonBoom Storyboard Pro
    \item ToonBoom Harmony
    \item Adobe Photoshop
\end{itemize}
\vspace{1em}
\end{document}
EOF

# Convert the markdown file to PDF using Pandoc
pandoc $resume_file \
  --pdf-engine=xelatex \
  -o zack_johnson_resume.pdf

echo "complete :^)"
