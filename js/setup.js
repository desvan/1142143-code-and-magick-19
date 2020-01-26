'use strict';

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Юлия', 'Виктор', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = [
  'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)',
  'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'
];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var unitSetup = document.querySelector('.setup');
var unitSetupSimilar = unitSetup.querySelector('.setup-similar');
var unitSetupSimilarList = unitSetupSimilar.querySelector('.setup-similar-list');
var unitCharacterTemplate = document.querySelector('#similar-wizard-template').content;

var generateCharacter = function () {
  return {
    name: getRandomValue(names) + ' ' + getRandomValue(surnames),
    coatColor: getRandomValue(coatColors),
    eyesColor: getRandomValue(eyesColors)
  };
};

var generateCharacters = function (count) {
  var characters = [];

  for (var i = 0; i < count; i++) {
    characters[i] = generateCharacter();
  }

  return characters;
};

var getRandomValue = function (arr) {
  var index = Math.round(Math.random() * (arr.length - 1));

  return arr[index];
};

var createUnitCharacter = function (data) {
  var unitCharacter = unitCharacterTemplate.cloneNode(true);
  var unitName = unitCharacter.querySelector('.setup-similar-label');
  var unitCoat = unitCharacter.querySelector('.wizard-coat');
  var unitEyes = unitCharacter.querySelector('.wizard-eyes');

  unitName.textContent = data.name;
  unitCoat.setAttribute('fill', data.coatColor);
  unitEyes.setAttribute('fill', data.eyesColor);

  return unitCharacter;
};

var createUnitCharacters = function (arr) {
  var unitCharacters = [];

  for (var i = 0; i < arr.length; i++) {
    unitCharacters[i] = createUnitCharacter(arr[i]);
  }

  return unitCharacters;
};

var insertUnitCharacters = function (arr) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arr.length; i++) {
    fragment.appendChild(arr[i]);
  }

  unitSetupSimilarList.appendChild(fragment);
};

var characters = generateCharacters(4);
var unitCharacters = createUnitCharacters(characters);

unitSetup.classList.remove('hidden');
insertUnitCharacters(unitCharacters);
unitSetupSimilar.classList.remove('hidden');
