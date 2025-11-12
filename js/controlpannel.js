document.addEventListener("DOMContentLoaded", function() {
  // --- SMS Alerts Panel ---
  function renderSMSPanel() {
    const smsLeft = `
      <div class="sms-left">
        <div class="sms-section-title">Send SMS Alert</div>
        <form autocomplete="off">
          <div class="sms-bulk-row">
            <span class="sms-bulk-label">Bulk Mode</span>
            <input type="checkbox" class="sms-switch" />
          </div>
          <div class="sms-row">
            <label class="sms-label">Recipient</label>
            <input type="text" class="sms-input" maxlength="15" placeholder="+1-555-0101">
          </div>
          <div class="sms-row">
            <label class="sms-label">Alert Type</label>
            <select class="sms-select">
              <option>Emergency Alert</option>
              <option>Weather Warning</option>
            </select>
          </div>
          <div class="sms-row">
            <label class="sms-label">Message Content</label>
            <textarea class="sms-textarea" maxlength="160" placeholder="Enter your alert message here."></textarea>
            <div class="sms-meta">
              <span>0 / 160 characters</span>
              <span style="float:right;">Single recipient</span>
            </div>
          </div>
          <div class="sms-btn-bar">
            <button class="sms-btn" type="submit">Send Now</button>
            <button class="sms-btn sms-schedule" type="button">Schedule</button>
          </div>
        </form>
      </div>
    `;
    const smsRight = `
      <div class="sms-right">
        <div class="sms-right-header">
          New Requests
          <button class="sms-viewall">View All</button>
        </div>
        <div class="sms-request-list">
          <div class="sms-request">
            <div class="sms-r-row">
              <span class="sms-request-ph">+1-555-0101</span>
              <span class="sms-request-tag tag-sent">sent</span>
            </div>
            <div style=" font-family: var(--font); font-size:0.98em; color:#2b3b52;">Flood warning for downtown area</div>
            <div class="sms-r-row">
              <span class="sms-request-label">emergency</span>
              <span class="sms-request-time">2024-01-15 14:30</span>
            </div>
          </div>
          <div class="sms-request">
            <div class="sms-r-row">
              <span class="sms-request-ph">+1-555-0102</span>
              <span class="sms-request-tag tag-pending">pending</span>
            </div>
            <div style="font-family: var(--font); font-size:0.98em;color:#2b3b52;">Evacuation notice: wildfire spreading</div>
            <div class="sms-r-row">
              <span class="sms-request-label">emergency</span>
              <span class="sms-request-time">2024-01-15 14:25</span>
            </div>
          </div>
          <div class="sms-request">
            <div class="sms-r-row">
              <span class="sms-request-ph">+1-555-0103</span>
              <span class="sms-request-tag tag-sent">sent</span>
            </div>
            <div style="font-family: var(--font); font-size:0.98em;color:#2b3b52;">Weather alert: severe thunderstorm</div>
            <div class="sms-r-row">
              <span class="sms-request-label tag-warn">warning</span>
              <span class="sms-request-time">2024-01-15 14:20</span>
            </div>
          </div>
          <div class="sms-request">
            <div class="sms-r-row">
              <span class="sms-request-ph">+1-555-0104</span>
              <span class="sms-request-tag tag-failed">failed</span>
            </div>
            <div style="font-family: var(--font); font-size:0.98em;color:#2b3b52;">Weather alert: flooding in downtown</div>
            <div class="sms-r-row">
              <span class="sms-request-label tag-emer">emergency</span>
              <span class="sms-request-time">2024-01-15 14:13</span>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("main-content").innerHTML = `<div id="main-content-row">${smsLeft}${smsRight}</div>`;
  }

  // --- Phone Requests Panel ---
  function renderPhonePanel() {
    const phoneHTML = `
      <div class="phone-panel-wrap">
        <div class="phone-panel">
          <div class="phone-panel-header">
            <span class="phone-panel-icon">&#128222;</span>
            Phone Call Requests
          </div>
          <table class="phone-table">
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Duration</th>
                <th>Status</th>
                <th>Type</th>
                <th>Operator</th>
                <th>Timestamp</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>+1-555-0201</td>
                <td>2:34</td>
                <td><span class="badge badge-completed">completed</span></td>
                <td><span class="badge badge-type">emergency</span></td>
                <td>Admin-001</td>
                <td>2024-01-15 14:28</td>
                <td>
                  <span class="action-icon">&#128065;</span>
                  <span class="action-icon">&#128222;</span>
                </td>
              </tr>
              <tr>
                <td>+1-555-0202</td>
                <td>1:15</td>
                <td><span class="badge badge-completed">completed</span></td>
                <td><span class="badge badge-type badge-followup">follow-up</span></td>
                <td>Admin-002</td>
                <td>2024-01-15 14:20</td>
                <td>
                  <span class="action-icon">&#128065;</span>
                  <span class="action-icon">&#128222;</span>
                </td>
              </tr>
              <tr>
                <td>+1-555-0203</td>
                <td>0:00</td>
                <td><span class="badge badge-noanswer">no-answer</span></td>
                <td><span class="badge badge-type">emergency</span></td>
                <td>Admin-001</td>
                <td>2024-01-15 14:10</td>
                <td>
                  <span class="action-icon">&#128065;</span>
                  <span class="action-icon">&#128222;</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
    document.getElementById("main-content").innerHTML = phoneHTML;
  }

  // --- NGO Resources Panel ---
  function renderNGOPanel() {
    const ngoHTML = `
      <div class="ngo-main-panel">
        <div class="ngo-top-info">
          <div class="ngo-header"><span class="ngo-header-icon">&#128736;</span>NGO Resource Directory</div>
          <div class="ngo-desc">
            Coordinate with partner NGOs and track available supplies and response teams for disaster relief operations.
          </div>
        </div>
        <div class="ngo-stats-row">
          <div class="ngo-stat">
            <div class="ngo-stat-label">Active NGOs</div>
            <div class="ngo-stat-main" style="color:#2563eb;">5</div>
            <div class="ngo-stat-desc">1 currently deployed</div>
          </div>
          <div class="ngo-stat">
            <div class="ngo-stat-label">Response Teams</div>
            <div class="ngo-stat-main" style="color:#22b063;">183</div>
            <div class="ngo-stat-desc">Total available teams</div>
          </div>
          <div class="ngo-stat">
            <div class="ngo-stat-label">Supply Categories</div>
            <div class="ngo-stat-main" style="color:#864bff;">24</div>
            <div class="ngo-stat-desc">Different supply types</div>
          </div>
        </div>
        <div class="ngo-cards-stack">
          <!-- Example NGO Card: Red Cross -->
          <div class="ngo-card">
            <div class="ngo-card-header">
              <div class="ngo-card-logo"><span>🏢</span></div>
              <div class="ngo-card-title">Red Cross Emergency Services</div>
              <span class="ngo-card-tag">International NGO</span>
              <span class="ngo-card-badge badge-active">active</span>
              <div class="ngo-actions">
                <button class="ngo-btn-edit" title="Edit">&#9998;</button>
                <button class="ngo-btn-contact" title="Contact">&#128222;</button>
              </div>
            </div>
            <div class="ngo-contact-row">
              <span class="ngo-contact-item"><b>Phone:</b> +1-800-RED-CROSS</span>
              <span class="ngo-contact-item"><b>Email:</b> emergency@redcross.org</span>
              <span class="ngo-contact-item"><b>Headquarters:</b> Washington, DC</span>
            </div>
            <div class="ngo-card-supplies-row">
              <div class="ngo-card-supplies">
                <div class="ngo-sup-title"><b>Available Supplies</b></div>
                <div class="ngo-sup-list">
                  <div>Medical Kits<br><span>500 kits</span></div>
                  <div>Water Bottles<br><span>10,000 bottles</span></div>
                  <div>Blankets<br><span>2,000 pieces</span></div>
                  <div>Emergency Food<br><span>5,000 packages</span></div>
                </div>
              </div>
              <div class="ngo-side-stats">
                <div class="ngo-side-highlight">
                  <div class="ngo-side-highlight-title">Response Teams</div>
                  <div class="ngo-side-highlight-main">45</div>
                  <div class="ngo-side-highlight-desc">Teams available</div>
                </div>
                <div class="ngo-side-highlight ngo-coverage">
                  <div class="ngo-side-highlight-title">Coverage Area</div>
                  <div class="ngo-side-highlight-main coverage-nationwide">Nationwide</div>
                </div>
              </div>
            </div>
            <div class="ngo-btn-row">
              <button class="ngo-card-btn">View Full Profile</button>
              <button class="ngo-card-btn">Send Message</button>
              <button class="ngo-card-btn ngo-card-primary">Request Resources</button>
            </div>
          </div>
          <div class="ngo-card">
            <div class="ngo-card-header">
              <div class="ngo-card-logo"><span>🏢</span></div>
              <div class="ngo-card-title">Red Cross Emergency Services</div>
              <span class="ngo-card-tag">International NGO</span>
              <span class="ngo-card-badge badge-active">active</span>
              <div class="ngo-actions">
                <button class="ngo-btn-edit" title="Edit">&#9998;</button>
                <button class="ngo-btn-contact" title="Contact">&#128222;</button>
              </div>
            </div>
            <div class="ngo-contact-row">
              <span class="ngo-contact-item"><b>Phone:</b> +1-800-RED-CROSS</span>
              <span class="ngo-contact-item"><b>Email:</b> emergency@redcross.org</span>
              <span class="ngo-contact-item"><b>Headquarters:</b> Washington, DC</span>
            </div>
            <div class="ngo-card-supplies-row">
              <div class="ngo-card-supplies">
                <div class="ngo-sup-title"><b>Available Supplies</b></div>
                <div class="ngo-sup-list">
                  <div>Medical Kits<br><span>500 kits</span></div>
                  <div>Water Bottles<br><span>10,000 bottles</span></div>
                  <div>Blankets<br><span>2,000 pieces</span></div>
                  <div>Emergency Food<br><span>5,000 packages</span></div>
                </div>
              </div>
              <div class="ngo-side-stats">
                <div class="ngo-side-highlight">
                  <div class="ngo-side-highlight-title">Response Teams</div>
                  <div class="ngo-side-highlight-main">45</div>
                  <div class="ngo-side-highlight-desc">Teams available</div>
                </div>
                <div class="ngo-side-highlight ngo-coverage">
                  <div class="ngo-side-highlight-title">Coverage Area</div>
                  <div class="ngo-side-highlight-main coverage-nationwide">Nationwide</div>
                </div>
              </div>
            </div>
            <div class="ngo-btn-row">
              <button class="ngo-card-btn">View Full Profile</button>
              <button class="ngo-card-btn">Send Message</button>
              <button class="ngo-card-btn ngo-card-primary">Request Resources</button>
            </div>
          </div>
          <div class="ngo-card">
            <div class="ngo-card-header">
              <div class="ngo-card-logo"><span>🏢</span></div>
              <div class="ngo-card-title">Red Cross Emergency Services</div>
              <span class="ngo-card-tag">International NGO</span>
              <span class="ngo-card-badge badge-active">active</span>
              <div class="ngo-actions">
                <button class="ngo-btn-edit" title="Edit">&#9998;</button>
                <button class="ngo-btn-contact" title="Contact">&#128222;</button>
              </div>
            </div>
            <div class="ngo-contact-row">
              <span class="ngo-contact-item"><b>Phone:</b> +1-800-RED-CROSS</span>
              <span class="ngo-contact-item"><b>Email:</b> emergency@redcross.org</span>
              <span class="ngo-contact-item"><b>Headquarters:</b> Washington, DC</span>
            </div>
            <div class="ngo-card-supplies-row">
              <div class="ngo-card-supplies">
                <div class="ngo-sup-title"><b>Available Supplies</b></div>
                <div class="ngo-sup-list">
                  <div>Medical Kits<br><span>500 kits</span></div>
                  <div>Water Bottles<br><span>10,000 bottles</span></div>
                  <div>Blankets<br><span>2,000 pieces</span></div>
                  <div>Emergency Food<br><span>5,000 packages</span></div>
                </div>
              </div>
              <div class="ngo-side-stats">
                <div class="ngo-side-highlight">
                  <div class="ngo-side-highlight-title">Response Teams</div>
                  <div class="ngo-side-highlight-main">45</div>
                  <div class="ngo-side-highlight-desc">Teams available</div>
                </div>
                <div class="ngo-side-highlight ngo-coverage">
                  <div class="ngo-side-highlight-title">Coverage Area</div>
                  <div class="ngo-side-highlight-main coverage-nationwide">Nationwide</div>
                </div>
              </div>
            </div>
            <div class="ngo-btn-row">
              <button class="ngo-card-btn">View Full Profile</button>
              <button class="ngo-card-btn">Send Message</button>
              <button class="ngo-card-btn ngo-card-primary">Request Resources</button>
            </div>
          </div>
          <div class="ngo-card">
            <div class="ngo-card-header">
              <div class="ngo-card-logo"><span>🏢</span></div>
              <div class="ngo-card-title">Red Cross Emergency Services</div>
              <span class="ngo-card-tag">International NGO</span>
              <span class="ngo-card-badge badge-active">active</span>
              <div class="ngo-actions">
                <button class="ngo-btn-edit" title="Edit">&#9998;</button>
                <button class="ngo-btn-contact" title="Contact">&#128222;</button>
              </div>
            </div>
            <div class="ngo-contact-row">
              <span class="ngo-contact-item"><b>Phone:</b> +1-800-RED-CROSS</span>
              <span class="ngo-contact-item"><b>Email:</b> emergency@redcross.org</span>
              <span class="ngo-contact-item"><b>Headquarters:</b> Washington, DC</span>
            </div>
            <div class="ngo-card-supplies-row">
              <div class="ngo-card-supplies">
                <div class="ngo-sup-title"><b>Available Supplies</b></div>
                <div class="ngo-sup-list">
                  <div>Medical Kits<br><span>500 kits</span></div>
                  <div>Water Bottles<br><span>10,000 bottles</span></div>
                  <div>Blankets<br><span>2,000 pieces</span></div>
                  <div>Emergency Food<br><span>5,000 packages</span></div>
                </div>
              </div>
              <div class="ngo-side-stats">
                <div class="ngo-side-highlight">
                  <div class="ngo-side-highlight-title">Response Teams</div>
                  <div class="ngo-side-highlight-main">45</div>
                  <div class="ngo-side-highlight-desc">Teams available</div>
                </div>
                <div class="ngo-side-highlight ngo-coverage">
                  <div class="ngo-side-highlight-title">Coverage Area</div>
                  <div class="ngo-side-highlight-main coverage-nationwide">Nationwide</div>
                </div>
              </div>
            </div>
            <div class="ngo-btn-row">
              <button class="ngo-card-btn">View Full Profile</button>
              <button class="ngo-card-btn">Send Message</button>
              <button class="ngo-card-btn ngo-card-primary">Request Resources</button>
            </div>
          </div>
          <div class="ngo-card">
            <div class="ngo-card-header">
              <div class="ngo-card-logo"><span>🏢</span></div>
              <div class="ngo-card-title">Red Cross Emergency Services</div>
              <span class="ngo-card-tag">International NGO</span>
              <span class="ngo-card-badge badge-active">active</span>
              <div class="ngo-actions">
                <button class="ngo-btn-edit" title="Edit">&#9998;</button>
                <button class="ngo-btn-contact" title="Contact">&#128222;</button>
              </div>
            </div>
            <div class="ngo-contact-row">
              <span class="ngo-contact-item"><b>Phone:</b> +1-800-RED-CROSS</span>
              <span class="ngo-contact-item"><b>Email:</b> emergency@redcross.org</span>
              <span class="ngo-contact-item"><b>Headquarters:</b> Washington, DC</span>
            </div>
            <div class="ngo-card-supplies-row">
              <div class="ngo-card-supplies">
                <div class="ngo-sup-title"><b>Available Supplies</b></div>
                <div class="ngo-sup-list">
                  <div>Medical Kits<br><span>500 kits</span></div>
                  <div>Water Bottles<br><span>10,000 bottles</span></div>
                  <div>Blankets<br><span>2,000 pieces</span></div>
                  <div>Emergency Food<br><span>5,000 packages</span></div>
                </div>
              </div>
              <div class="ngo-side-stats">
                <div class="ngo-side-highlight">
                  <div class="ngo-side-highlight-title">Response Teams</div>
                  <div class="ngo-side-highlight-main">45</div>
                  <div class="ngo-side-highlight-desc">Teams available</div>
                </div>
                <div class="ngo-side-highlight ngo-coverage">
                  <div class="ngo-side-highlight-title">Coverage Area</div>
                  <div class="ngo-side-highlight-main coverage-nationwide">Nationwide</div>
                </div>
              </div>
            </div>
            <div class="ngo-btn-row">
              <button class="ngo-card-btn">View Full Profile</button>
              <button class="ngo-card-btn">Send Message</button>
              <button class="ngo-card-btn ngo-card-primary">Request Resources</button>
            </div>
          </div>
          <!-- Add more cards as needed -->
          <div class="ngo-add-panel">
            <div class="ngo-add-bigplus">+</div>
            <div class="ngo-add-title">Add New NGO Partner</div>
            <div class="ngo-add-desc">Register a new NGO organization and their available resources</div>
            <button class="ngo-add-btn">Add NGO</button>
          </div>
        </div>
      </div>
    `;
    document.getElementById("main-content").innerHTML = ngoHTML;
  }

  // --- Disease Monitor Panel ---
  function renderDiseasePanel() {
    const diseaseHTML = `
      <div class="disease-main-wrap">
        <div class="disease-top-info">
          <b>Weather-Health Correlation Monitor</b>
          <span class="disease-top-desc">
            Real-time tracking of weather-related health risks. Data updated every 2 hours from CDC and WHO sources.
          </span>
        </div>
        <div class="disease-cards-stack">
          <div class="disease-card border-high">
            <div class="disease-card-row">
              <span class="disease-card-title">Cholera</span>
              <span class="pill-badge badge-high">high risk</span>
              <span class="disease-card-status disease-incr">Increasing</span>
            </div>
            <div class="disease-subrow">Trigger: Flooding / Heavy Rainfall</div>
            <div class="disease-data-row">
              <div>
                <div class="disease-data-label">Reported Cases</div>
                <div class="disease-data-main">245</div>
              </div>
              <div>
                <div class="disease-data-label">Affected Regions</div>
                <div>
                  <span class="region-pill">Houston, TX</span>
                  <span class="region-pill">Miami, FL</span>
                  <span class="region-pill">New Orleans, LA</span>
                </div>
              </div>
            </div>
            <div class="disease-prevent">
              <span class="disease-prevent-label">Prevention Measures</span>
              Boil water, proper sanitation, vaccination campaigns
            </div>
            <div class="disease-btn-row">
              <button class="card-detail-btn">&#128065; View Details</button>
              <button class="alert-btn">Send Alert</button>
            </div>
          </div>
          <div class="disease-card border-medium">
            <div class="disease-card-row">
              <span class="disease-card-title">Dengue Fever</span>
              <span class="pill-badge badge-medium">medium risk</span>
              <span class="disease-card-status disease-stable">Stable</span>
            </div>
            <div class="disease-subrow">Trigger: High Humidity / Standing Water</div>
            <div class="disease-data-row">
              <div>
                <div class="disease-data-label">Reported Cases</div>
                <div class="disease-data-main">89</div>
              </div>
              <div>
                <div class="disease-data-label">Affected Regions</div>
                <div>
                  <span class="region-pill">Phoenix, AZ</span>
                  <span class="region-pill">Tampa, FL</span>
                </div>
              </div>
            </div>
            <div class="disease-prevent">
              <span class="disease-prevent-label">Prevention Measures</span>
              Mosquito control, eliminate standing water, use repellents
            </div>
            <div class="disease-btn-row">
              <button class="card-detail-btn">&#128065; View Details</button>
              <button class="alert-btn">Send Alert</button>
            </div>
          </div>
          <div class="disease-card border-high">
            <div class="disease-card-row">
              <span class="disease-card-title">Heat Stroke</span>
              <span class="pill-badge badge-high">high risk</span>
              <span class="disease-card-status disease-incr">Increasing</span>
            </div>
            <div class="disease-subrow">Trigger: Extreme Heat / Heatwave</div>
            <div class="disease-data-row">
              <div>
                <div class="disease-data-label">Reported Cases</div>
                <div class="disease-data-main">412</div>
              </div>
              <div>
                <div class="disease-data-label">Affected Regions</div>
                <div>
                  <span class="region-pill">Las Vegas, NV</span>
                  <span class="region-pill">Phoenix, AZ</span>
                  <span class="region-pill">Dallas, TX</span>
                </div>
              </div>
            </div>
            <div class="disease-prevent">
              <span class="disease-prevent-label">Prevention Measures</span>
              Stay hydrated, avoid outdoor activities, cooling centers
            </div>
            <div class="disease-btn-row">
              <button class="card-detail-btn">&#128065; View Details</button>
              <button class="alert-btn">Send Alert</button>
            </div>
          </div>
          <div class="disease-card border-medium">
            <div class="disease-card-row">
              <span class="disease-card-title">Respiratory Infections</span>
              <span class="pill-badge badge-medium">medium risk</span>
              <span class="disease-card-status disease-decr">Decreasing</span>
            </div>
            <div class="disease-subrow">Trigger: Wildfire Smoke / Poor Air Quality</div>
            <div class="disease-data-row">
              <div>
                <div class="disease-data-label">Reported Cases</div>
                <div class="disease-data-main">156</div>
              </div>
              <div>
                <div class="disease-data-label">Affected Regions</div>
                <div>
                  <span class="region-pill">Los Angeles, CA</span>
                  <span class="region-pill">Portland, OR</span>
                </div>
              </div>
            </div>
            <div class="disease-prevent">
              <span class="disease-prevent-label">Prevention Measures</span>
              Wear N95 masks, stay indoors, air purifiers
            </div>
            <div class="disease-btn-row">
              <button class="card-detail-btn">&#128065; View Details</button>
              <button class="alert-btn">Send Alert</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("main-content").innerHTML = diseaseHTML;
  }

  // --- Alert Manager Panel ---
  function renderAlertManagerPanel() {
    const html = `
      <div class="alert-mgr-container">
        <div class="alert-mgr-row">
          <div class="alert-mgr-form">
            <div class="alert-mgr-form-title"><span style="color:#f23823;font-size:1.3em;vertical-align:-4px;margin-right:8px;">&#128276;</span>Create Public Alert</div>
            <form>
              <label>Alert Title</label>
              <input class="alert-mgr-input" type="text" placeholder="e.g., Severe Weather Warning">
              <label>Severity Level</label>
              <select class="alert-mgr-input"><option>High</option><option>Medium</option><option>Low</option></select>
              <label>Category</label>
              <select class="alert-mgr-input"><option>Weather</option><option>Health</option><option>Resource</option></select>
              <label>Alert Message</label>
              <textarea class="alert-mgr-input" placeholder="Enter detailed alert information..."></textarea>
              <div class="alert-mgr-2col">
                <div>
                  <label>Affected Region</label>
                  <input class="alert-mgr-input" type="text" placeholder="e.g., Los Angeles County">
                </div>
                <div>
                  <label>Duration</label>
                  <select class="alert-mgr-input">
                    <option>6 Hours</option>
                    <option>12 Hours</option>
                    <option>1 Day</option>
                    <option>2 Days</option>
                  </select>
                </div>
              </div>
              <div class="alert-mgr-form-btns">
                <button type="submit" class="alert-mgr-publish-btn"> Publish Alert</button>
                <button type="button" class="alert-mgr-preview-btn">Preview</button>
              </div>
            </form>
          </div>
          <div class="alert-mgr-perf">
            <div class="alert-mgr-perf-title">Alert Performance</div>
            <div class="alert-mgr-perf-bars">
              <div class="alert-mgr-bar-label">Response Rate <span>87%</span></div>
              <div class="alert-mgr-bar">
                <div class="alert-mgr-bar-inner" style="width:87%;background: #232323;"></div>
              </div>
              <div class="alert-mgr-bar-label">SMS Success Rate <span>95%</span></div>
              <div class="alert-mgr-bar">
                <div class="alert-mgr-bar-inner" style="width:95%;background:#2563eb;"></div>
              </div>
              <div class="alert-mgr-bar-label">Call Completion Rate <span>72%</span></div>
              <div class="alert-mgr-bar">
                <div class="alert-mgr-bar-inner" style="width:72%;background:#23c481;"></div>
              </div>
            </div>
            <hr class="alert-mgr-divider"/>
            <div class="alert-mgr-qstats-title">Quick Stats</div>
            <div class="alert-mgr-qstats">
              <div class="alert-mgr-qstat alert-failed">
                <div class="qstat-label">Failed Messages</div>
                <div class="qstat-main" style="color:#f23823;">23</div>
              </div>
              <div class="alert-mgr-qstat alert-pending">
                <div class="qstat-label">Pending Requests</div>
                <div class="qstat-main" style="color:#e4a429;">12</div>
              </div>
            </div>
            <div class="alert-mgr-qstats">
              <div class="alert-mgr-qstat alert-avg">
                <div class="qstat-label">Avg Response Time</div>
                <div class="qstat-main" style="color:#23c481;">4.2 min</div>
              </div>
              <div class="alert-mgr-qstat alert-active">
                <div class="qstat-label">Active Recipients</div>
                <div class="qstat-main" style="color:#2563eb;">3,421</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById("main-content").innerHTML = html;
  }

  // --- Tab switching logic (all five sections) ---
  function switchTab(btn) {
    document.querySelectorAll(".dashboard-tab-link").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    if (btn.dataset.section === "sms") {
      renderSMSPanel();
    } else if (btn.dataset.section === "phone") {
      renderPhonePanel();
    } else if (btn.dataset.section === "ngo") {
      renderNGOPanel();
    } else if (btn.dataset.section === "disease") {
      renderDiseasePanel();
    } else if (btn.dataset.section === "alert") {
      renderAlertManagerPanel();
    } else {
      document.getElementById("main-content").innerHTML =
        `<div style="max-width:940px;margin:80px auto;text-align:center;font-size:1.2em;padding:60px;background:#fff;border-radius:13px;border:1px solid #eceef1;">${btn.textContent.trim()} content coming soon</div>`;
    }
  }

  // --- Initialize ---
  renderSMSPanel();
  document.querySelectorAll(".dashboard-tab-link").forEach(btn => {
    btn.addEventListener("click", function () { switchTab(this); });
  });
});
