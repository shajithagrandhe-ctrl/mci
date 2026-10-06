import { contactData } from '../data/contact.js';

export function renderContactModal() {
  return `
    <div class="modal-overlay" id="dispatch-modal" role="dialog" aria-modal="true" aria-labelledby="modal-dispatch-title">
      <div class="modal-card">
        <div class="modal-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: 4px; background: var(--color-primary-marine); color: #fff; display: flex; align-items: center; justify-content: center;">
              <span class="material-symbols-outlined">terminal</span>
            </div>
            <div>
              <span class="badge badge-accent" style="font-size: 0.65rem;">DIRECT SUPERINTENDENT ROUTING // 24/7 STANDBY</span>
              <h3 id="modal-dispatch-title" style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin-top: 2px;">
                Central Operations Desk &amp; Quick Dispatch
              </h3>
            </div>
          </div>
          <button type="button" class="btn btn-sm" id="close-dispatch-modal" aria-label="Close modal">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div class="modal-body">
          <p style="font-size: 0.8125rem; color: var(--color-slate); margin-bottom: 1.25rem;">
            Direct operational channel for urgent vessel towage, scheduled dry dock reservations, salvage coordination, and statutory survey requests.
          </p>

          <form id="modal-dispatch-form" novalidate>
            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="form-label" for="modal-inquiry-type">Inquiry Classification <span class="required">*</span></label>
              <select class="form-select" id="modal-inquiry-type" name="inquiryType" required>
                <option value="">Select operational sector...</option>
                ${contactData.inquiryCategories.map(cat => `<option value="${cat}">${cat}</option>`).join('')}
              </select>
              <span class="form-error">Please select an operational classification.</span>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="modal-vessel-name">Vessel Name &amp; IMO Number <span class="required">*</span></label>
                <input type="text" class="form-input" id="modal-vessel-name" name="vesselName" placeholder="e.g. M/V SAGAR PRIDE / IMO 9412086" required />
                <span class="form-error">Vessel name or IMO identifier is required.</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-rep-name">Representative Name <span class="required">*</span></label>
                <input type="text" class="form-input" id="modal-rep-name" name="repName" placeholder="e.g. Capt. / Superintendent Name" required />
                <span class="form-error">Designated representative name is required.</span>
              </div>
            </div>

            <div class="form-grid-2">
              <div class="form-group">
                <label class="form-label" for="modal-email">Official Email <span class="required">*</span></label>
                <input type="email" class="form-input" id="modal-email" name="email" placeholder="dispatch@lineagency.com" required />
                <span class="form-error">Enter a valid operational email.</span>
              </div>
              <div class="form-group">
                <label class="form-label" for="modal-phone">Direct Phone / SatCom <span class="required">*</span></label>
                <input type="tel" class="form-input" id="modal-phone" name="phone" placeholder="+91 XXXXX XXXXX / Inmarsat-C" required />
                <span class="form-error">Direct phone number is required.</span>
              </div>
            </div>

            <div class="form-group" style="margin-bottom: 1rem;">
              <label class="form-label" for="modal-scope">Scope of Operational Request <span class="required">*</span></label>
              <textarea class="form-textarea" id="modal-scope" name="scope" placeholder="Detail operational requirements: ETA, required bollard pull, dry dock beam clearance, cargo manifest class (IMDG), or dredging volume specs..." required style="min-height: 80px;"></textarea>
              <span class="form-error">Please specify the scope of operational support.</span>
            </div>

            <div style="margin-bottom: 1.25rem;">
              <label style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.775rem; color: var(--color-charcoal-navy); cursor: pointer;">
                <input type="checkbox" id="modal-emergency" name="emergency" style="margin-top: 3px;" />
                <span><strong>Emergency Port Call / Distress Berth Priority:</strong> Check only if vessel is experiencing mechanical impediment, unseaworthy hull breaches, or requires immediate salvage intervention.</span>
              </label>
            </div>

            <div id="modal-form-alert" style="display: none; padding: 0.75rem 1rem; border-radius: 4px; margin-bottom: 1rem; font-size: 0.8125rem;"></div>

            <div style="display: flex; align-items: center; justify-content: flex-end; gap: 0.75rem;">
              <button type="button" class="btn btn-secondary" id="cancel-dispatch-modal">Cancel</button>
              <button type="submit" class="btn btn-primary">
                <span class="material-symbols-outlined" style="font-size: 16px;">send</span>
                <span>Submit Operational Request</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}
