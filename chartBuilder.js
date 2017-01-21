function iGraph(name, app, adm) {
  var name = name;
  $('#myChart').remove();
  $('#ivyGraph').append(' <canvas id="myChart"></canvas>');
  document.getElementById("ivyName").innerHTML = name;
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016"],
      datasets: [{
        label: 'Total Applicants',
        data: [app[0], app[1], app[2]],
        backgroundColor: "rgba(145,61,100,1)"
      }, {
        label: 'Admitted Students',
        data: [adm[0], adm[1], adm[2]],
        backgroundColor: "rgba(78,132,204,1)"
      }]
    }
  });

};

function uGraph(name, app, adm) {
  var name = name;
  $('#myChart2').remove();
  $('#UCGraph').append(' <canvas id="myChart2"></canvas>');
  document.getElementById("UCName").innerHTML = name;
  var ctx = document.getElementById("myChart2").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016"],
      datasets: [{
        label: 'Total Applicants',
        data: [app[0], app[1], app[2]],
        backgroundColor: "rgba(106,180,255,1)"
      }, {
        label: 'Admitted Students',
        data: [adm[0], adm[1], adm[2]],
        backgroundColor: "rgba(255,187,33,1)"
      }]
    }
  });
};

function oGraph(name, app, adm) {
  var name = name;
  $('#myChart3').remove();
  $('#oGraph').append(' <canvas id="myChart3"></canvas>');
  document.getElementById("oName").innerHTML = name;
  var ctx = document.getElementById("myChart3").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["2014", "2015", "2016"],
      datasets: [{
        label: 'Total Applicants',
        data: [app[0], app[1], app[2]],
        backgroundColor: "rgba(105,204,97,1)"
      }, {
        label: 'Admitted Students',
        data: [adm[0], adm[1], adm[2]],
        backgroundColor: "rgba(255,160,147,1)"
      }]
    }
  });
};
