(function () {
  'use strict';

  document.querySelectorAll('[data-publication-browser]').forEach(function (browser) {
    var papers = Array.from(browser.querySelectorAll('.publication')).map(function (element) {
      return { element: element, topics: JSON.parse(element.getAttribute('data-topics')) || [] };
    });
    var selected = new Set();
    var topicCounts = new Map();
    var controls = browser.querySelector('.publication-filter-topics');
    var allButton = controls.querySelector('[data-publication-clear]');
    var empty = browser.querySelector('.publication-empty');
    var count = browser.querySelector('.publication-count');

    papers.forEach(function (paper) {
      new Set(paper.topics).forEach(function (topic) {
        topicCounts.set(topic, (topicCounts.get(topic) || 0) + 1);
      });
    });
    Array.from(topicCounts.keys()).sort(function (a, b) {
      return topicCounts.get(b) - topicCounts.get(a) || a.localeCompare(b, 'en');
    }).forEach(function (topic) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'publication-topic';
      button.setAttribute('data-publication-topic', topic);
      button.textContent = topic;
      controls.appendChild(button);
    });

    var topicButtons = browser.querySelectorAll('[data-publication-topic]');
    function update() {
      var visible = 0;
      papers.forEach(function (paper) {
        var matches = Array.from(selected).every(function (topic) { return paper.topics.includes(topic); });
        paper.element.hidden = !matches;
        if (matches) visible += 1;
      });
      topicButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(selected.has(button.getAttribute('data-publication-topic'))));
      });
      allButton.setAttribute('aria-pressed', String(selected.size === 0));
      count.textContent = 'Showing ' + visible + ' of ' + papers.length + ' papers';
      empty.hidden = visible !== 0;
    }

    browser.addEventListener('click', function (event) {
      var button = event.target.closest('button');
      if (!button || !browser.contains(button)) return;
      if (button.hasAttribute('data-publication-clear')) {
        selected.clear();
        if (empty.contains(button)) allButton.focus();
      } else if (button.hasAttribute('data-publication-topic')) {
        var topic = button.getAttribute('data-publication-topic');
        if (selected.has(topic)) selected.delete(topic);
        else selected.add(topic);
      } else return;
      update();
    });

    topicButtons.forEach(function (button) { button.disabled = false; });
    update();
    browser.querySelector('.publication-filters').hidden = false;
  });
}());
