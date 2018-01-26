$(document).ready(function() {
  console.log('app.js loaded!');
  $.get('/api/mentors').success(function (mentors) {
  mentors.forEach(function(mentor) {
    renderMentor(mentor);
  });
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
  "                     <img src='" + "http://placehold.it/400x400'" +  " alt='book image'>" +
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
  "                <button class='btn btn-info edit-book'>Bookmark</button>" +
  "                <button class='btn btn-success put-book'>Select</button>" +
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