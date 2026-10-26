---
layout: academic
title: "Zhuoming Liu"
excerpt: "Ph.D. student at UW–Madison researching vision-language model post-training and video understanding."
permalink: /
redirect_from:
  - /about/
  - /about.html
---
{% include base_path %}


<section class="profile" aria-labelledby="profile-name">
  <div class="profile-copy">
    <p class="eyebrow">Computer vision &amp; machine learning</p>
    <h1 id="profile-name">Zhuoming Liu</h1>
    <p class="profile-name-secondary"><span lang="zh">刘卓名</span> <span aria-hidden="true">·</span> Zoom</p>
    <p class="profile-intro">I am a Ph.D. student in Computer Science at <strong>UW–Madison</strong>, advised by <a href="https://scholar.google.com/citations?hl=en&amp;user=_y-8nrcAAAAJ&amp;view_op=list_works&amp;sortby=pubdate">Yin Li</a>. My research focuses on <strong>vision-language model post-training</strong> and <strong>video understanding</strong>.</p>
    <p class="profile-education">Previously, I earned an M.S. in Computer Science at USC, advised by <a href="https://sites.usc.edu/iris-cvlab/professor-ram-nevatia/">Ram Nevatia</a>, and a bachelor’s degree at Sun Yat-sen University.</p>
    {% include academic-social.html %}
  </div>
  <div class="profile-photo">
    <img src="{{ base_path }}/images/{{ site.author.avatar }}" alt="Zhuoming Liu" width="200" height="200" fetchpriority="high">
    <p><i class="fa-solid fa-location-dot" aria-hidden="true"></i> Madison, WI</p>
  </div>
</section>

<section class="research-section" aria-labelledby="selected-publications">
  <div class="section-heading">
    <h2 id="selected-publications">Selected publications</h2>
    <a class="text-action" href="{{ base_path }}/publications/">All publications <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a>
  </div>
  {% assign selected = site.data.research | where_exp: "paper", "paper.selected_order != nil" | sort: "selected_order" %}
  {% include academic-publications.html papers=selected heading="h3" %}
</section>

<section class="experience-section" aria-labelledby="experience">
  <div class="section-heading"><h2 id="experience">Experience</h2><a class="text-action" href="{{ base_path }}/cv/">Full CV <i class="fa-solid fa-arrow-right" aria-hidden="true"></i></a></div>
  <div class="experience-list">
    <article class="experience-entry">
      <p class="experience-date">Sep 2025–Apr 2026</p>
      <div class="experience-organization">
        <img class="experience-logo" src="{{ base_path }}/images/organizations/meta.svg" alt="" width="64" height="64" loading="lazy">
        <div><h3><a href="https://ai.meta.com/research/sam3/">Meta Superintelligence Labs, Perception</a></h3><p class="experience-role">Research Scientist Intern</p><details><summary>Collaborators</summary><p class="experience-detail">Worked with Dr. <a href="https://hkhedr.com/">Haitham Khedr</a>, <a href="https://www.nikhilaravi.com/">Nikhila Ravi</a>, and <a href="https://feichtenhofer.github.io/">Christoph Feichtenhofer</a>. I also worked closely with Dr. <a href="https://andreamad8.github.io/">Andrea Madotto</a>, <a href="https://janghyuncho.github.io/">Vincent Cho</a>, <a href="https://pzzhang.github.io/pzzhang/">Pengchuan Zhang</a>, and <a href="https://dbolya.com/">Daniel Bolya</a>.</p></details></div>
      </div>
    </article>
    <article class="experience-entry">
      <p class="experience-date">May–Aug 2025</p>
      <div class="experience-organization">
        <img class="experience-logo" src="{{ base_path }}/images/organizations/amazon.png" alt="" width="64" height="64" loading="lazy">
        <div><h3><a href="https://amazon.jobs/content/en/teams/agi">Amazon AGI</a></h3><p class="experience-role">Applied Research Scientist Intern</p><details><summary>Collaborators</summary><p class="experience-detail">Worked with Dr. <a href="https://scholar.google.com/citations?user=2CkqEGcAAAAJ&hl=en">Robinson Piramuthu</a> and <a href="https://scholar.google.com/citations?user=AjTfCjEAAAAJ&hl=en">Xiaofeng Gao</a>.</p></details></div>
      </div>
    </article>
    <article class="experience-entry">
      <p class="experience-date">Jul 2020–Jul 2021</p>
      <div class="experience-organization">
        <img class="experience-logo" src="{{ base_path }}/images/organizations/sensetime.png" alt="" width="64" height="64" loading="lazy">
        <div><h3><a href="https://www.sensetime.com/en">SenseTime Research</a></h3><p class="experience-role">Research Intern</p><details><summary>Supervisors</summary><p class="experience-detail"><a href="https://scholar.google.com/citations?user=AqmmngsAAAAJ&hl=en">Huaping Zhong</a>, Dr. <a href="https://scholar.google.com/citations?user=PopTv7kAAAAJ&hl=en">Conghui He</a>, and Professor <a href="https://jifengdai.org/">Jifeng Dai</a>.</p></details></div>
      </div>
    </article>
  </div>
</section>
