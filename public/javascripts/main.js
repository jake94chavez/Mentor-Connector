// $(document).ready(function() {
//   console.log('app.js loaded!');
//   $.get('/api/mentors').success(function (mentors) {
//   mentors.forEach(function(mentor) {
//     renderMentor(mentor);
//   });
// });
// });
var mentorList = [
  {
    name: 'Daria Culton',
    email: 'daria.culton@nonprofit.org',
    age: 35,
    interests: ['Reading', ' Outdoor Recreation'],
    field: 'Tech',
  },
  {
    name: 'David Hanson',
    email: 'david.hanson@mediamixers.com',
    age: 42,
    interests: ['Photography', ' Film', ' Collecting'],
    field: 'Film',
  },
  {
    name: 'Daniel Brown',
    email: 'daniel.brown@browninc.com',
    age: 33,
    interests: ['Athletics', ' Business', ' Fashion'],
    field: 'Fashion',
  },
  {
    name: 'Angela Garcia',
    email: 'angela.garcia@pressstartgames.com',
    age: 46,
    interests: ['Reading', ' Gaming', ' Creative Writing'],
    field: 'Video Games',
  },
  {
    name: 'Heather Crosby',
    email: 'heather.crosby@tripsolutions.com',
    age: 36,
    interests: ['Travel', ' Cooking', ' Health/Fitness'],
    field: 'Travel',
  },
  {
    name: 'John Applegate',
    email: 'john.applegate@freshyfilms.com',
    age: 28,
    interests: ['Music', ' Film', ' Acting'],
    field: 'Music',
  },
  {
    name: 'Terry Hawthorne',
    email: 'terry.hawthorne@graphicgals.com',
    age: 30,
    interests: ['Art', ' Electronics', ' Photography'],
    field: 'Graphic Design',
  },
  {
    name: 'Katie Grady',
    email: 'katie.grady@pressstartgames.com',
    age: 30,
    interests: ['Gaming', ' Electronics', ' Collecting'],
    field: 'Video Games',
  }
];

$(document).ready(function() {
  console.log('app.js loaded!');
  mentorList.forEach(function(mentor) {
    renderMentor(mentor);
  });
});

function generateMentorHtml(mentor) {
  var mentorHtml =
  "        <!-- one book -->" +
  "        <div class='book' data-book-id='" + mentor._id + "'>" +
  "          <div class='col-sm-6'>" +
  "            <div class='panel panel-default'>" +
  "              <div class='panel-body'>" +
  "              <!-- begin book internal row -->" +
  "                <div class='row'>" +
  "                  <div class='col-md-3 col-xs-12 thumbnail book-art'>" +
  "                     <img src='" + "https://i.imgur.com/pE3YM2W.png'" +  " alt='mentor image'>" +
  "                  </div>" +
  "                  <div class='col-md-9 col-xs-12'>" +
  "                    <ul class='list-group'>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Name:</h4>" +
  "                        <span class='book-title'>" + mentor.name + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Field:</h4>" +
  "                        <span class='author-name'>" + mentor.field + "</span>" +
  "                      </li>" +
  "                      <li class='list-group-item'>" +
  "                        <h4 class='inline-header'>Interests:</h4>" +
  "                        <span class='book-release-date'>" + mentor.interests + "</span>" +
  "                      </li>" +
  "                    </ul>" +
  "                  </div>" +
  "                </div>" +
  "                <!-- end of book internal row -->" +

  "              </div>" + // end of panel-body

  "              <div class='panel-footer'>" +
  "                <button class='btn btn-info bookmark'>Bookmark</button>" +
  "                <button class='btn btn-success Select'>Select</button>" +
  "              </div>" +

  "            </div>" +
  "          </div>" +
  "          <!-- end one book -->";
  return mentorHtml;
 }

 function renderMentor(mentor) {
  var html = generateMentorHtml(mentor);
  console.log('rendering mentor:', mentor);

  $('#otherMatches').append(html);
}