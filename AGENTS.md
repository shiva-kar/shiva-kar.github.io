# AGENTS.md — Portfolio Development Guidelines

These instructions apply to all work in this repository. The accompanying portfolio master prompt contains the detailed content, design direction, project specifications, and acceptance criteria. Use it as the primary task brief; use this file as the persistent repository-level guidance.

## 1. Understand Before Editing

- Inspect the existing repository, framework, dependencies, routes, components, styles, assets, and build commands before making changes.
- Preserve the current technology stack unless a change is clearly necessary.
- Reuse and improve existing components where practical. Do not replace working functionality or rebuild the site from scratch without a compelling reason.
- Follow the project's established coding conventions and directory structure.

## 2. Source of Truth and Accuracy

- Use the accompanying master prompt and existing verified portfolio content as the source of truth.
- Do not invent experience, projects, features, metrics, benchmarks, awards, certifications, employment, affiliations, or achievements.
- Do not imply that Shiva Kar is a Godot Engine employee. Describe the work as open-source contributions.
- Keep submitted, merged, open, and closed pull requests clearly distinguished.
- Only link to repositories, pull requests, deployments, certificates, and documents that actually exist.
- If a fact or URL cannot be verified, omit it or leave it clearly identified for the owner to supply. Never fabricate it.
- Describe simulated or prototype functionality accurately; do not present it as a live production service.
- Keep the positioning focused on a BCA student and Java backend developer. Do not imply seniority or professional employment that has not been established.

## 3. Content and Writing

- Write concise, specific, professional, recruiter-friendly copy.
- Prefer clear descriptions of implemented work and technical decisions over adjectives, buzzwords, and generic claims.
- Avoid exaggerated language, unnecessary biography, and unsupported claims such as "expert," "enterprise-grade," or "highly scalable."
- Keep Java backend engineering as the primary focus. Present systems programming and Godot contributions as complementary strengths.
- Make project descriptions consistent with their actual source code and documentation.
- Do not add technologies to the skills section solely for keyword matching. Include only skills that can be credibly explained and supported.

## 4. Design and User Experience

- Follow the master prompt's design direction while respecting the existing site's visual identity where it is effective.
- Prioritize clear hierarchy, readable typography, consistent spacing, restrained colour, and easy navigation.
- Make the site responsive across desktop, tablet, and mobile sizes.
- Keep the landing page concise. Put deeper architecture, implementation, and testing details on project detail pages or expandable sections where useful.
- Prioritize the two Java backend projects, then present SXSHELL and Godot open-source contributions as supporting engineering evidence.
- Use animations sparingly and respect reduced-motion preferences.
- Avoid decorative elements that do not improve understanding or navigation.

## 5. Functional and Accessibility Requirements

- Every button, link, menu, form, filter, and interactive element must work as presented.
- Do not create fake contact forms, download buttons, live demos, or integrations.
- Use semantic HTML, accessible names, appropriate heading order, keyboard-accessible controls, visible focus states, and sufficient colour contrast.
- Add descriptive alternative text to meaningful images.
- Ensure the website remains usable when animation is reduced or disabled.
- Use safe attributes for external links opened in new tabs.

## 6. Engineering Practices

- Make focused, maintainable changes. Avoid unnecessary dependencies, abstractions, configuration changes, or framework migrations.
- Keep content data organized and avoid duplicating the same information across components.
- Preserve existing routes, metadata, assets, and deployment configuration unless they need correction.
- Do not disable tests, lint rules, type checks, or accessibility checks to make a change appear successful.
- Do not add secrets, private keys, credentials, or personal data beyond the public contact details specified in the master prompt.

## 7. Validation Before Completion

After implementation:

1. Run the project's production build.
2. Run available type checks, linting, and tests.
3. Check the site at desktop, tablet, and narrow mobile widths.
4. Check for horizontal overflow, broken layouts, missing assets, console errors, and dead links.
5. Verify internal navigation, external links, project repositories, pull requests, email actions, and resume downloads.
6. Review the rendered pages for spacing, readability, content hierarchy, and consistency.
7. Fix regressions introduced by the changes.

Report only checks that were actually run and results that were actually observed. Clearly list anything that remains incomplete or could not be verified.

## 8. Working Rule

Implement the requested changes in the existing repository; do not stop at a proposal, mockup, screenshot, or list of recommendations. Follow the accompanying master prompt for the complete portfolio scope and content. When instructions conflict, preserve factual accuracy and working functionality, and do not fabricate missing information.
