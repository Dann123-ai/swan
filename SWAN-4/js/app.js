/* =========================================
   SWAN
   Soul's Walk Among Nothingness
   App Core v0.2
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    console.log("SWAN loaded");

    const PROFILE_KEY = "swan_profile";


    /* =====================================
       ELEMENT HELPERS
    ====================================== */

    const $ = id => document.getElementById(id);


    /* =====================================
       SCREENS
    ====================================== */

    const titleScreen = $("title-screen");
    const profileScreen = $("profile-screen");
    const mainMenuScreen = $("main-menu-screen");
    const dashboardScreen = $("dashboard-screen");
    const peopleScreen = $("people-screen");
    const characterCreatorScreen = $("character-creator-screen");
    const eventsScreen = $("events-screen");
    const eventCreatorScreen = $("event-creator-screen");
    const relationshipMapScreen = $("relationship-map-screen");
    const journalScreen = $("journal-screen");
    const journalEditorScreen = $("journal-editor-screen");
    const statisticsScreen = $("statistics-screen");
    const themesScreen = $("themes-screen");
    const achievementsScreen = $("achievements-screen");
    const settingsScreen = $("settings-screen");


    /* =====================================
       EXISTING UI
    ====================================== */

    const beginButton = $("begin-button");
    const profileBackButton = $("profile-back-button");
    const logoutButton = $("logout-button");
    const resetProfileButton = $("reset-profile-button");

    const createProfileForm = $("create-profile-form");
    const loginForm = $("login-form");

    const createUsername = $("create-username");
    const createPassword = $("create-password");
    const confirmPassword = $("confirm-password");
    const loginPassword = $("login-password");

    const createMessage = $("create-message");
    const loginMessage = $("login-message");

    const savedProfileName = $("saved-profile-name");
    const menuProfileName = $("menu-profile-name");
    const loginAvatarLetter = $("login-avatar-letter");
    const menuAvatarLetter = $("menu-avatar-letter");
    const profileSubtitle = $("profile-subtitle");

    const continueButton = $("continue-button");

    const dashboardMenuButton = $("dashboard-menu-button");
    const dashboardLogoutButton = $("dashboard-logout-button");
    const dashboardProfileName = $("dashboard-profile-name");
    const dashboardGreeting = $("dashboard-greeting");

    const peopleCount = $("people-count");
    const eventsCount = $("events-count");
    const emotionCount = $("emotion-count");
    const averageRating = $("average-rating");

    const addPersonButton = $("add-person-button");
    const emptyAddPersonButton = $("empty-add-person-button");
    const peoplePreviewAdd = $("people-preview-add");
    const viewPeopleButton = $("view-people-button");
    const addEventButton = $("add-event-button");
    const journalButton = $("journal-button");

    const navPeopleButton = $("nav-people-button");
    const navEventsButton = $("nav-events-button");
    const navJournalButton = $("nav-journal-button");
    const navSettingsButton = $("nav-settings-button");
    const relationshipMapMenuButton = $("relationship-map-menu-button");
    const peopleMapButton = $("people-map-button");

    const relationshipHomeButton = $("relationship-home-button");
    const relationshipAddButton = $("relationship-add-button");
    const relationshipResetViewButton = $("relationship-reset-view-button");

    const relationshipMap = $("relationship-map");
    const relationshipLines = $("relationship-lines");
    const relationshipNodes = $("relationship-nodes");
    const relationshipEmptyState = $("relationship-empty-state");

    const relationshipModal = $("relationship-modal");
    const relationshipModalClose = $("relationship-modal-close");
    const relationshipModalTitle = $("relationship-modal-title");
    const relationshipPersonA = $("relationship-person-a");
    const relationshipPersonB = $("relationship-person-b");
    const relationshipType = $("relationship-type");
    const relationshipDescription = $("relationship-description");
    const relationshipStrength = $("relationship-strength");
    const relationshipStrengthValue = $("relationship-strength-value");
    const relationshipFormMessage = $("relationship-form-message");
    const relationshipSaveButton = $("relationship-save-button");
    const relationshipDeleteButton = $("relationship-delete-button");

    const relationshipDetailsModal = $("relationship-details-modal");
    const relationshipDetailsClose = $("relationship-details-close");
    const relationshipDetailsTitle = $("relationship-details-title");
    const relationshipDetailsPersonA = $("relationship-details-person-a");
    const relationshipDetailsPersonB = $("relationship-details-person-b");
    const relationshipDetailsType = $("relationship-details-type");
    const relationshipDetailsDescription = $("relationship-details-description");
    const relationshipStrengthFill = $("relationship-strength-fill");
    const relationshipDetailsStrengthValue = $("relationship-details-strength-value");
    const relationshipEditButton = $("relationship-edit-button");
    const journalMenuButton = $("journal-menu-button");
    const journalHomeButton = $("journal-home-button");
    const journalNewButton = $("journal-new-button");
    const journalEmptyNewButton = $("journal-empty-new-button");
    const journalSearch = $("journal-search");
    const journalEntryList = $("journal-entry-list");
    const journalEmptyState = $("journal-empty-state");
    const journalEntryCount = $("journal-entry-count");
    const journalMonthCount = $("journal-month-count");
    const journalCommonMood = $("journal-common-mood");

    const journalForm = $("journal-form");
    const journalEditorBackButton = $("journal-editor-back-button");
    const journalEditorHeading = $("journal-editor-heading");
    const journalSaveTopButton = $("journal-save-top-button");
    const journalSaveBottomButton = $("journal-save-bottom-button");
    const journalDeleteButton = $("journal-delete-button");
    const journalFormMessage = $("journal-form-message");

    const journalTitle = $("journal-title");
    const journalDate = $("journal-date");
    const journalMood = $("journal-mood");
    const journalBody = $("journal-body");
    const journalPeopleOptions = $("journal-people-options");
    const journalFavourite = $("journal-favourite");
    const statisticsMenuButton = $("statistics-menu-button");
    const statisticsHomeButton = $("statistics-home-button");
    const statisticsRefreshButton = $("statistics-refresh-button");

    const statisticsPeopleTotal = $("statistics-people-total");
    const statisticsEventsTotal = $("statistics-events-total");
    const statisticsJournalTotal = $("statistics-journal-total");
    const statisticsAverageRating = $("statistics-average-rating");

    const impactPositiveBar = $("impact-positive-bar");
    const impactNeutralBar = $("impact-neutral-bar");
    const impactNegativeBar = $("impact-negative-bar");
    const impactPositiveCount = $("impact-positive-count");
    const impactNeutralCount = $("impact-neutral-count");
    const impactNegativeCount = $("impact-negative-count");

    const statisticsTopPeople = $("statistics-top-people");
    const statisticsEmotions = $("statistics-emotions");
    const statisticsMoods = $("statistics-moods");
    const statisticsRelationships = $("statistics-relationships");
    const statisticsActivity = $("statistics-activity");
    const themesMenuButton = $("themes-menu-button");
    const themesHomeButton = $("themes-home-button");
    const themesGrid = $("themes-grid");
    const themesUnlockedCount = $("themes-unlocked-count");
    const themesNextUnlock = $("themes-next-unlock");
    const achievementsMenuButton = $("achievements-menu-button");
    const achievementsHomeButton = $("achievements-home-button");
    const achievementsGrid = $("achievements-grid");
    const achievementsCount = $("achievements-count");
    const achievementsProgressFill = $("achievements-progress-fill");
    const settingsMenuButton = $("settings-menu-button");
    const settingsHomeButton = $("settings-home-button");

    const settingsUsername = $("settings-username");
    const settingsSaveUsername = $("settings-save-username");
    const settingsCurrentPassword = $("settings-current-password");
    const settingsNewPassword = $("settings-new-password");
    const settingsConfirmPassword = $("settings-confirm-password");
    const settingsChangePassword = $("settings-change-password");
    const settingsProfileMessage = $("settings-profile-message");

    const settingsAnimations = $("settings-animations");
    const settingsAmbient = $("settings-ambient");
    const settingsSoundEffects = $("settings-sound-effects");
    const settingsGreeting = $("settings-greeting");
    const settingsCompactMobile = $("settings-compact-mobile");

    const settingsCurrentThemeName = $("settings-current-theme-name");
    const settingsOpenThemes = $("settings-open-themes");

    const settingsExportData = $("settings-export-data");
    const settingsImportData = $("settings-import-data");
    const settingsDataMessage = $("settings-data-message");

    const settingsInfoPeople = $("settings-info-people");
    const settingsInfoEvents = $("settings-info-events");
    const settingsInfoJournal = $("settings-info-journal");
    const settingsInfoConnections = $("settings-info-connections");

    const settingsResetWorld = $("settings-reset-world");
    const dashboardNotificationsButton = $("dashboard-notifications-button");
    const dashboardNotificationBadge = $("dashboard-notification-badge");
    const notificationToastContainer = $("notification-toast-container");
    const notificationCenter = $("notification-center");
    const notificationCenterClose = $("notification-center-close");
    const notificationMarkAllRead = $("notification-mark-all-read");
    const notificationClearAll = $("notification-clear-all");
    const notificationList = $("notification-list");
    const notificationEmptyState = $("notification-empty-state");
    const ambientWorld = $("ambient-world");
    const ambientSun = $("ambient-sun");
    const installSwanBanner = $("install-swan-banner");
    const installSwanButton = $("install-swan-button");
    const installSwanDismiss = $("install-swan-dismiss");

    let deferredSwanInstallPrompt = null;
    const settingsAchievementNotifications = $("settings-achievement-notifications");
    const settingsThemeNotifications = $("settings-theme-notifications");
    const settingsBirthdayNotifications = $("settings-birthday-notifications");
    const dashboardEventsViewAll = $("dashboard-events-view-all");
    const dashboardPeopleViewAll = $("dashboard-people-view-all");

    const eventsHomeButton = $("events-home-button");
    const eventsAddButton = $("events-add-button");
    const eventsEmptyAddButton = $("events-empty-add-button");
    const eventsSearch = $("events-search");
    const eventsList = $("events-list");
    const eventsEmptyState = $("events-empty-state");

    const eventForm = $("event-form");
    const eventCreatorBackButton = $("event-creator-back-button");
    const eventSaveTopButton = $("event-save-top-button");
    const eventSaveBottomButton = $("event-save-bottom-button");
    const eventFormMessage = $("event-form-message");
    const eventTitle = $("event-title");
    const eventDate = $("event-date");
    const eventImportance = $("event-importance");
    const eventDescription = $("event-description");
    const eventPeopleOptions = $("event-people-options");
    const eventAttachments = $("event-attachments");
    const eventAttachmentList = $("event-attachment-list");
    const eventAutoScoreButton = $("event-auto-score-button");
    const eventAutoScoreSummary = $("event-auto-score-summary");
    const eventAutoScoreExplanation = $("event-auto-score-explanation");
    const eventDetailsModal = $("event-details-modal");
    const eventDetailsClose = $("event-details-close");
    const eventDetailsTitle = $("event-details-title");
    const eventDetailsDate = $("event-details-date");
    const eventDetailsImpact = $("event-details-impact");
    const eventDetailsImportance = $("event-details-importance");
    const eventDetailsDescription = $("event-details-description");
    const eventDetailsPeople = $("event-details-people");
    const eventDetailsAttachments = $("event-details-attachments");
    const eventDetailsEdit = $("event-details-edit");
    const eventDetailsDelete = $("event-details-delete");


    /* =====================================
       PEOPLE UI
    ====================================== */

    const peopleHomeButton = $("people-home-button");
    const peopleAddButton = $("people-add-button");
    const peopleEmptyAddButton = $("people-empty-add-button");
    const peopleSearch = $("people-search");
    const peopleGrid = $("people-grid");
    const peopleEmptyState = $("people-empty-state");


    /* =====================================
       CHARACTER CREATOR UI
    ====================================== */

    const characterForm = $("character-form");
    const creatorBackButton = $("creator-back-button");
    const creatorSaveTopButton = $("creator-save-top-button");
    const creatorSaveBottomButton = $("creator-save-bottom-button");
    const creatorHeading = $("creator-heading");
    const characterFormMessage = $("character-form-message");

    const characterName = $("character-name");
    const characterNickname = $("character-nickname");
    const characterRelationship = $("character-relationship");
    const characterBirthday = $("character-birthday");
    const characterNotes = $("character-notes");

    const characterSkin = $("character-skin");
    const characterHair = $("character-hair");
    const characterEyes = $("character-eyes");
    const characterClothes = $("character-clothes");

    const avatarFace = $("avatar-face");
    const avatarHair = $("avatar-hair");
    const avatarShirt = $("avatar-shirt");
    const avatarPreviewName = $("avatar-preview-name");
    const avatarPreviewRelationship = $("avatar-preview-relationship");

    const avatarAccessory = $("avatar-accessory");

    const avatarStyleState = {
        face: 1,
        hairStyle: 1,
        eyesStyle: 1,
        browsStyle: 1,
        mouthStyle: 1,
        accessory: "none",
        outfitStyle: 1
    };

    const emotionOptions = $("emotion-options");
    const newEmotionName = $("new-emotion-name");
    const newEmotionColor = $("new-emotion-color");
    const addEmotionButton = $("add-emotion-button");

    const ratingNames = [
        "trust",
        "love",
        "respect",
        "comfort",
        "communication",
        "fun",
        "reliability"
    ];

    let selectedCharacterId = null;
    let editingCharacterId = null;
    let eventSourceCharacterId = null;
    let editingEventId = null;
    let selectedEventId = null;
    let removedEventAttachmentIds = new Set();
    let eventAttachmentObjectUrls = [];
    let editingRelationshipId = null;
    let selectedRelationshipId = null;
    let draggedRelationshipNodeId = null;
    let editingJournalEntryId = null;


    /* =====================================
       STORAGE
    ====================================== */

    function getProfile() {
        const saved = localStorage.getItem(PROFILE_KEY);

        if (!saved) {
            return null;
        }

        try {
            return JSON.parse(saved);
        } catch (error) {
            console.error("Could not read SWAN profile.", error);
            return null;
        }
    }


    function saveProfile(profile) {
        localStorage.setItem(
            PROFILE_KEY,
            JSON.stringify(profile)
        );
    }


    function normaliseProfile(profile) {
        if (!profile) return null;

        profile.characters = Array.isArray(profile.characters) ? profile.characters : [];
        profile.events = Array.isArray(profile.events) ? profile.events : [];
        profile.emotions = Array.isArray(profile.emotions) ? profile.emotions : [];
        profile.journal = Array.isArray(profile.journal) ? profile.journal : [];
        profile.relationships = Array.isArray(profile.relationships) ? profile.relationships : [];
        profile.notifications = Array.isArray(profile.notifications) ? profile.notifications : [];
        profile.achievements = Array.isArray(profile.achievements) ? profile.achievements : [];

        return profile;
    }


    /* =====================================
       PASSWORD HASHING
    ====================================== */

    async function hashPassword(password) {
        const encoder = new TextEncoder();
        const data = encoder.encode(password);
        const hash = await crypto.subtle.digest("SHA-256", data);

        return Array
            .from(new Uint8Array(hash))
            .map(byte => byte.toString(16).padStart(2, "0"))
            .join("");
    }


    /* =====================================
       SCREEN SYSTEM
    ====================================== */

    function showScreen(screen) {
        if (!screen) {
            console.error("SWAN tried to open a screen that does not exist.");
            return;
        }

        document.querySelectorAll(".screen").forEach(item => {
            item.classList.remove("active");
        });

        screen.classList.add("active");
        screen.scrollTop = 0;
        window.scrollTo(0, 0);
    }


    /* =====================================
       PROFILE DISPLAY
    ====================================== */

    function updateProfileDisplay(profile) {
        if (!profile) return;

        const name = profile.username;
        const firstLetter = name.charAt(0).toUpperCase();

        if (savedProfileName) savedProfileName.textContent = name;
        if (menuProfileName) menuProfileName.textContent = name;
        if (loginAvatarLetter) loginAvatarLetter.textContent = firstLetter;
        if (menuAvatarLetter) menuAvatarLetter.textContent = firstLetter;
        if (dashboardProfileName) dashboardProfileName.textContent = name;
    }


    function openProfileScreen() {
        const profile = normaliseProfile(getProfile());

        if (createMessage) createMessage.textContent = "";
        if (loginMessage) loginMessage.textContent = "";

        if (profile) {
            createProfileForm.classList.add("hidden");
            loginForm.classList.remove("hidden");
            profileSubtitle.textContent = "Continue your walk.";
            updateProfileDisplay(profile);
        } else {
            loginForm.classList.add("hidden");
            createProfileForm.classList.remove("hidden");
            profileSubtitle.textContent = "Begin your walk.";
        }

        showScreen(profileScreen);
    }


    /* =====================================
       DASHBOARD
    ====================================== */

    function getGreeting() {
        const hour = new Date().getHours();

        if (hour < 12) return "Good morning,";
        if (hour < 18) return "Good afternoon,";
        return "Good evening,";
    }


    function calculateAverageRating(profile) {
        const characters = profile.characters || [];

        let total = 0;
        let amount = 0;

        characters.forEach(character => {
            if (!character.ratings) return;

            Object.values(character.ratings).forEach(rating => {
                const number = Number(rating);

                if (!Number.isNaN(number) && number >= 1 && number <= 9) {
                    total += number;
                    amount++;
                }
            });
        });

        if (amount === 0) return "—";
        return (total / amount).toFixed(1);
    }


    function renderDashboardPeople(profile) {
        const preview = $("dashboard-people-preview");
        if (!preview) return;

        const characters = (profile.characters || []).slice(0, 4);

        preview.innerHTML = "";

        characters.forEach(character => {
            const button = document.createElement("button");
            button.className = "person-preview";
            button.type = "button";

            button.innerHTML = `
                <div class="preview-avatar" style="background:${escapeHtml(character.avatar?.clothes || "#72cfff")}">
                    ${escapeHtml(character.name.charAt(0).toUpperCase())}
                </div>
                <strong>${escapeHtml(character.name)}</strong>
                <span>${escapeHtml(character.relationship || "Person")}</span>
            `;

            button.addEventListener("click", () => openPeopleScreen());
            preview.appendChild(button);
        });

        const add = document.createElement("button");
        add.type = "button";
        add.className = "person-preview add-person-preview";
        add.innerHTML = `
            <div class="preview-avatar">+</div>
            <strong>Add Person</strong>
            <span>Grow your world</span>
        `;
        add.addEventListener("click", openCharacterCreator);
        preview.appendChild(add);
    }


    function renderDashboardEvents(profile) {
        const container = $("recent-events-container");
        if (!container) return;

        const memories = [...(profile.events || [])]
            .sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0))
            .slice(0, 3);

        if (memories.length === 0) {
            container.innerHTML = `
                <div class="empty-state">
                    <div class="empty-symbol">✦</div>
                    <h4>Your world is still quiet.</h4>
                    <p>Add people and memories to begin filling the nothingness.</p>
                    <button id="empty-add-person-button" class="game-button">ADD YOUR FIRST PERSON</button>
                </div>
            `;

            $("empty-add-person-button")?.addEventListener("click", openCharacterCreator);
            return;
        }

        container.innerHTML = "";

        memories.forEach(memory => {
            const card = document.createElement("article");
            card.className = "profile-event-item";
            card.innerHTML = `
                <div class="profile-event-item-top">
                    <h4>${escapeHtml(memory.title)}</h4>
                    <span class="profile-event-item-date">${escapeHtml(formatEventDate(memory.date))}</span>
                </div>
                ${memory.description ? `<p>${escapeHtml(memory.description)}</p>` : ""}
                <span class="profile-event-impact ${escapeHtml(memory.impact || "neutral")}">
                    ${escapeHtml((memory.impact || "neutral").toUpperCase())}
                </span>
            `;
            container.appendChild(card);
        });
    }

    function loadDashboard() {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        updateProfileDisplay(profile);

        if (dashboardGreeting) {
            dashboardGreeting.textContent = getGreeting();
        }

        if (peopleCount) peopleCount.textContent = profile.characters.length;
        if (eventsCount) eventsCount.textContent = profile.events.length;
        if (emotionCount) emotionCount.textContent = profile.emotions.length;
        if (averageRating) averageRating.textContent = calculateAverageRating(profile);

        renderDashboardPeople(profile);
        renderDashboardEvents(profile);
        showScreen(dashboardScreen);
        syncSwanNotifications();
    }


    /* =====================================
       PEOPLE PAGE
    ====================================== */

    function escapeHtml(value = "") {
        return String(value)
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");
    }


    function avatarFeatureData(avatar = {}) {
        return {
            face: Number(avatar.face || 1),
            hairStyle: Number(avatar.hairStyle || 1),
            eyesStyle: Number(avatar.eyesStyle || 1),
            browsStyle: Number(avatar.browsStyle || 1),
            mouthStyle: Number(avatar.mouthStyle || 1),
            accessory: avatar.accessory || "none",
            outfitStyle: Number(avatar.outfitStyle || 1)
        };
    }


    function renderPeople(filter = "") {
        const profile = normaliseProfile(getProfile());
        if (!profile || !peopleGrid || !peopleEmptyState) return;

        const search = filter.trim().toLowerCase();

        const characters = profile.characters.filter(character => {
            const searchable = [
                character.name,
                character.nickname,
                character.relationship,
                ...(character.emotions || [])
            ].join(" ").toLowerCase();

            return searchable.includes(search);
        });

        peopleGrid.innerHTML = "";

        peopleEmptyState.classList.toggle(
            "show",
            profile.characters.length === 0
        );

        if (profile.characters.length === 0) {
            return;
        }

        peopleEmptyState.classList.remove("show");

        characters.forEach(character => {
            const card = document.createElement("article");
            card.className = "people-card";

            const avatar = character.avatar || {};
            const emotionalTags = (character.emotions || [])
                .map(name => {
                    const emotion = profile.emotions.find(item => item.name === name);
                    const colour = emotion?.color || "#eeeeee";

                    return `<span class="emotion-chip" style="--emotion-colour:${escapeHtml(colour)}">${escapeHtml(name)}</span>`;
                })
                .join("");

            const features = avatarFeatureData(avatar);

            card.innerHTML = `
                <div class="people-card-avatar">
                    <div
                        class="mini-hair mini-hair-style-${features.hairStyle}"
                        style="background:${escapeHtml(avatar.hair || "#4a2c24")}"
                    ></div>

                    <div
                        class="mini-face mini-face-style-${features.face}"
                        style="background:${escapeHtml(avatar.skin || "#f2c7a5")}"
                    >
                        <span class="mini-brow left mini-brow-style-${features.browsStyle}"></span>
                        <span class="mini-brow right mini-brow-style-${features.browsStyle}"></span>

                        <span
                            class="mini-eye left mini-eye-style-${features.eyesStyle}"
                            style="background:${escapeHtml(avatar.eyes || "#2d2d2d")}"
                        ></span>

                        <span
                            class="mini-eye right mini-eye-style-${features.eyesStyle}"
                            style="background:${escapeHtml(avatar.eyes || "#2d2d2d")}"
                        ></span>

                        <span class="mini-mouth mini-mouth-style-${features.mouthStyle}"></span>
                        <span class="mini-accessory mini-accessory-${features.accessory}"></span>
                    </div>

                    <div
                        class="mini-shirt mini-outfit-style-${features.outfitStyle}"
                        style="background:${escapeHtml(avatar.clothes || "#72cfff")}"
                    ></div>
                </div>

                <h3>${escapeHtml(character.name)}</h3>

                <p class="people-card-relationship">
                    ${escapeHtml(character.nickname ? `"${character.nickname}" · ` : "")}
                    ${escapeHtml(character.relationship || "Person")}
                </p>

                <div class="people-card-emotions">
                    ${emotionalTags}
                </div>
            `;

            card.addEventListener("click", () => {
                openCharacterProfile(character.id);
            });

            peopleGrid.appendChild(card);
        });
    }


    function openPeopleScreen() {
        renderPeople(peopleSearch?.value || "");
        showScreen(peopleScreen);
    }















    /* =====================================
       MOBILE UI HELPERS
    ====================================== */

    function updateMobileUiState() {
        const isPhone =
            window.matchMedia(
                "(max-width: 600px)"
            ).matches;

        document.body.classList.toggle(
            "swan-phone-layout",
            isPhone
        );
    }


    function preventAccidentalHorizontalScroll() {
        window.scrollTo({
            left: 0,
            top: window.scrollY,
            behavior: "instant"
        });
    }


    window.addEventListener(
        "resize",
        updateMobileUiState
    );

    window.addEventListener(
        "orientationchange",
        () => {
            window.setTimeout(
                updateMobileUiState,
                250
            );
        }
    );


    /* =====================================
       PWA / INSTALLATION
    ====================================== */

    function isSwanStandalone() {
        return (
            window.matchMedia(
                "(display-mode: standalone)"
            ).matches ||
            window.navigator.standalone === true
        );
    }


    function isIOSDevice() {
        return (
            /iphone|ipad|ipod/i.test(
                window.navigator.userAgent
            )
        );
    }


    function updateStandaloneState() {
        document.body.classList.toggle(
            "swan-standalone",
            isSwanStandalone()
        );
    }


    function showInstallBanner() {
        if (
            !installSwanBanner ||
            isSwanStandalone()
        ) {
            return;
        }

        const dismissed =
            localStorage.getItem(
                "swan_install_dismissed"
            );

        if (dismissed === "true") {
            return;
        }

        installSwanBanner.classList.remove(
            "hidden"
        );


        if (
            isIOSDevice() &&
            !deferredSwanInstallPrompt
        ) {
            const copy =
                installSwanBanner.querySelector(
                    ".install-swan-copy p"
                );

            if (copy) {
                copy.textContent =
                    "On iPhone/iPad: open Safari's Share menu, then choose Add to Home Screen.";
            }

            if (installSwanButton) {
                installSwanButton.textContent =
                    "HOW TO";
            }
        }
    }


    async function installSwan() {
        if (isIOSDevice()) {
            alert(
                "To install SWAN on iPhone or iPad:\n\n" +
                "1. Open SWAN in Safari.\n" +
                "2. Tap the Share button.\n" +
                "3. Choose “Add to Home Screen”.\n" +
                "4. Tap Add."
            );
            return;
        }

        if (!deferredSwanInstallPrompt) {
            alert(
                "Your browser has not offered installation yet. " +
                "Make sure SWAN is being served through HTTPS or localhost."
            );
            return;
        }

        deferredSwanInstallPrompt.prompt();

        try {
            await deferredSwanInstallPrompt.userChoice;
        } finally {
            deferredSwanInstallPrompt = null;
            installSwanBanner?.classList.add(
                "hidden"
            );
        }
    }


    function dismissInstallBanner() {
        installSwanBanner?.classList.add(
            "hidden"
        );

        localStorage.setItem(
            "swan_install_dismissed",
            "true"
        );
    }


    function registerSwanServiceWorker() {
        if (!("serviceWorker" in navigator)) {
            return;
        }

        window.addEventListener(
            "load",
            async () => {
                try {
                    await navigator.serviceWorker.register(
                        "./service-worker.js"
                    );
                } catch (error) {
                    console.error(
                        "SWAN service worker could not register:",
                        error
                    );
                }
            }
        );
    }


    window.addEventListener(
        "beforeinstallprompt",
        event => {
            event.preventDefault();

            deferredSwanInstallPrompt =
                event;

            showInstallBanner();
        }
    );


    window.addEventListener(
        "appinstalled",
        () => {
            deferredSwanInstallPrompt = null;

            installSwanBanner?.classList.add(
                "hidden"
            );

            document.body.classList.add(
                "swan-standalone"
            );

            localStorage.removeItem(
                "swan_install_dismissed"
            );
        }
    );


    /* =====================================
       AMBIENT HOME WORLD
    ====================================== */

    function getTimePeriod(hour) {
        if (hour >= 5 && hour < 10) {
            return "morning";
        }

        if (hour >= 10 && hour < 17) {
            return "day";
        }

        if (hour >= 17 && hour < 21) {
            return "evening";
        }

        return "night";
    }


    function getSouthernHemisphereSeason(monthIndex) {
        /*
            NZ / Southern Hemisphere:
            Summer: Dec-Feb
            Autumn: Mar-May
            Winter: Jun-Aug
            Spring: Sep-Nov
        */

        if (
            monthIndex === 11 ||
            monthIndex <= 1
        ) {
            return "summer";
        }

        if (
            monthIndex >= 2 &&
            monthIndex <= 4
        ) {
            return "autumn";
        }

        if (
            monthIndex >= 5 &&
            monthIndex <= 7
        ) {
            return "winter";
        }

        return "spring";
    }


    function updateAmbientWorld() {
        const now =
            new Date();

        const hour =
            now.getHours() +
            now.getMinutes() / 60;

        const timePeriod =
            getTimePeriod(hour);

        const season =
            getSouthernHemisphereSeason(
                now.getMonth()
            );

        document.body.dataset.timePeriod =
            timePeriod;

        document.body.dataset.season =
            season;


        /*
            Day arc:
            6am begins at far-left/low.
            Noon reaches the highest point.
            6pm finishes at far-right/low.

            Night uses the same arc as a moon.
        */

        let normalizedHour;

        if (
            hour >= 6 &&
            hour <= 18
        ) {
            normalizedHour =
                (hour - 6) / 12;
        } else {
            const nightHour =
                hour > 18
                    ? hour - 18
                    : hour + 6;

            normalizedHour =
                nightHour / 12;
        }

        normalizedHour =
            Math.max(
                0,
                Math.min(
                    1,
                    normalizedHour
                )
            );

        const x =
            10 +
            normalizedHour * 80;

        const arc =
            Math.sin(
                normalizedHour *
                Math.PI
            );

        const y =
            150 -
            arc * 105;

        if (ambientSun) {
            ambientSun.style.setProperty(
                "--sun-x",
                `${x}%`
            );

            ambientSun.style.setProperty(
                "--sun-y",
                `${y}px`
            );
        }
    }


    function startAmbientWorldClock() {
        updateAmbientWorld();

        window.setInterval(
            updateAmbientWorld,
            60 * 1000
        );
    }


    /* =====================================
       NOTIFICATIONS
    ====================================== */

    function notificationColour(type) {
        return ({
            achievement: "#f4aa4f",
            theme: "#aa7dff",
            birthday: "#f58abb",
            system: "#73cefa"
        })[type] || "#73cefa";
    }

    function notificationIcon(type) {
        return ({
            achievement: "★",
            theme: "◈",
            birthday: "♡",
            system: "✦"
        })[type] || "✦";
    }

    function notificationTimeText(value) {
        const date = new Date(value || Date.now());
        if (Number.isNaN(date.getTime())) return "";
        return new Intl.DateTimeFormat(undefined, {
            day:"numeric", month:"short", hour:"numeric", minute:"2-digit"
        }).format(date);
    }

    function updateNotificationBadge(profile = normaliseProfile(getProfile())) {
        if (!profile || !dashboardNotificationBadge) return;
        const unread = (profile.notifications || []).filter(item => !item.read).length;
        dashboardNotificationBadge.textContent = String(unread);
        dashboardNotificationBadge.classList.toggle("hidden", unread === 0);
    }

    function addNotification({type="system", title, message, key=null, showToast=true}) {
        const profile = normaliseProfile(getProfile());
        if (!profile) return null;

        profile.notifications = Array.isArray(profile.notifications) ? profile.notifications : [];

        if (key && profile.notifications.some(item => item.key === key)) return null;

        const item = {
            id:`notification_${Date.now()}_${Math.random().toString(16).slice(2)}`,
            key, type, title, message, read:false, createdAt:new Date().toISOString()
        };

        profile.notifications.unshift(item);
        profile.notifications = profile.notifications.slice(0,100);
        saveProfile(profile);
        updateNotificationBadge(profile);

        if (showToast) showNotificationToast(item);
        return item;
    }

    function showNotificationToast(item) {
        if (!notificationToastContainer || !item) return;

        const toast = document.createElement("article");
        toast.className = "notification-toast";
        toast.style.setProperty("--toast-colour", notificationColour(item.type));

        toast.innerHTML = `
            <div class="notification-toast-icon">${escapeHtml(notificationIcon(item.type))}</div>
            <div class="notification-toast-content">
                <strong>${escapeHtml(item.title)}</strong>
                <p>${escapeHtml(item.message)}</p>
            </div>
            <button type="button" class="notification-toast-close">×</button>
        `;

        const remove = () => {
            if (!toast.isConnected) return;
            toast.classList.add("removing");
            setTimeout(() => toast.remove(), 240);
        };

        toast.querySelector(".notification-toast-close")?.addEventListener("click", remove);
        notificationToastContainer.appendChild(toast);
        setTimeout(remove, 5200);
    }

    function renderNotificationCenter() {
        const profile = normaliseProfile(getProfile());
        if (!profile) return;

        const items = profile.notifications || [];
        notificationList.innerHTML = "";
        notificationEmptyState.classList.toggle("show", items.length === 0);

        items.forEach(item => {
            const row = document.createElement("article");
            row.className = `notification-item ${item.read ? "" : "unread"}`;
            row.style.setProperty("--notification-colour", notificationColour(item.type));
            row.innerHTML = `
                <div class="notification-item-icon">${escapeHtml(notificationIcon(item.type))}</div>
                <div class="notification-item-content">
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.message)}</p>
                    <div class="notification-item-meta">${escapeHtml(notificationTimeText(item.createdAt))}</div>
                </div>
            `;
            row.addEventListener("click", () => {
                item.read = true;
                saveProfile(profile);
                updateNotificationBadge(profile);
                renderNotificationCenter();
            });
            notificationList.appendChild(row);
        });
    }

    function markAllNotificationsRead() {
        const profile = normaliseProfile(getProfile());
        if (!profile) return;
        (profile.notifications || []).forEach(item => item.read = true);
        saveProfile(profile);
        updateNotificationBadge(profile);
        renderNotificationCenter();
    }

    function clearNotifications() {
        const profile = normaliseProfile(getProfile());
        if (!profile) return;
        if ((profile.notifications || []).length && !confirm("Clear all SWAN notifications?")) return;
        profile.notifications = [];
        saveProfile(profile);
        updateNotificationBadge(profile);
        renderNotificationCenter();
    }

    function openNotificationCenter() {
        renderNotificationCenter();
        notificationCenter.classList.remove("hidden");
        markAllNotificationsRead();
    }

    function closeNotificationCenter() {
        notificationCenter.classList.add("hidden");
    }

    function syncThemeNotifications(profile) {
        const settings = ensureAppSettings(profile);
        const before = new Set(profile.unlockedThemes || ["default"]);
        const unlocked = calculateUnlockedThemes(profile);
        if (!settings.themeNotifications) return;

        unlocked.forEach(id => {
            if (before.has(id)) return;
            const theme = SWAN_THEMES.find(item => item.id === id);
            if (!theme) return;
            addNotification({
                type:"theme",
                title:"New theme unlocked",
                message:theme.name,
                key:`theme:${id}`
            });
        });
    }

    function syncAchievementNotifications(profile) {
        const settings = ensureAppSettings(profile);
        const before = new Set(profile.achievements || []);
        const unlocked = updateAchievements(profile);
        if (!settings.achievementNotifications) return;

        unlocked.forEach(id => {
            if (before.has(id)) return;
            const achievement = SWAN_ACHIEVEMENTS.find(item => item.id === id);
            if (!achievement) return;
            addNotification({
                type:"achievement",
                title:"Achievement unlocked",
                message:achievement.name,
                key:`achievement:${id}`
            });
        });
    }

    function checkBirthdayNotifications(profile) {
        const settings = ensureAppSettings(profile);
        if (!settings.birthdayNotifications) return;

        const today = new Date();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        const year = today.getFullYear();

        profile.characters.forEach(character => {
            if (!character.birthday) return;
            const parts = character.birthday.split("-");
            if (Number(parts[1]) === month && Number(parts[2]) === day) {
                addNotification({
                    type:"birthday",
                    title:"Birthday today",
                    message:`${character.name} has a birthday today.`,
                    key:`birthday:${character.id}:${year}`
                });
            }
        });
    }

    function syncSwanNotifications() {
        let profile = normaliseProfile(getProfile());
        if (!profile) return;

        ensureAppSettings(profile);
        syncThemeNotifications(profile);

        profile = normaliseProfile(getProfile());
        syncAchievementNotifications(profile);

        profile = normaliseProfile(getProfile());
        checkBirthdayNotifications(profile);

        updateNotificationBadge(normaliseProfile(getProfile()));
    }

    /* =====================================
       SETTINGS
    ====================================== */

    function ensureAppSettings(profile) {
        profile.appSettings = {
            animations:
                profile.appSettings?.animations ?? true,

            ambientEffects:
                profile.appSettings?.ambientEffects ?? true,

            soundEffects:
                profile.appSettings?.soundEffects ?? true,

            timeGreeting:
                profile.appSettings?.timeGreeting ?? true,

            compactMobile:
                profile.appSettings?.compactMobile ?? false,

            achievementNotifications:
                profile.appSettings?.achievementNotifications ?? true,

            themeNotifications:
                profile.appSettings?.themeNotifications ?? true,

            birthdayNotifications:
                profile.appSettings?.birthdayNotifications ?? true
        };

        return profile.appSettings;
    }


    function applyAppSettings(profile) {
        if (!profile) return;

        const settings =
            ensureAppSettings(profile);

        document.body.classList.toggle(
            "swan-no-animations",
            !settings.animations
        );

        document.body.classList.toggle(
            "swan-compact-mobile",
            Boolean(settings.compactMobile)
        );

        document.body.dataset.ambientEffects =
            settings.ambientEffects
                ? "on"
                : "off";

        document.body.dataset.soundEffects =
            settings.soundEffects
                ? "on"
                : "off";
    }


    function currentThemeName(profile) {
        const theme =
            SWAN_THEMES.find(
                item =>
                    item.id ===
                    (profile.currentTheme || "default")
            );

        return theme?.name || "Daydream";
    }


    function showSettingsMessage(
        element,
        message,
        type = ""
    ) {
        if (!element) return;

        element.textContent = message;

        element.classList.remove(
            "success",
            "error"
        );

        if (type) {
            element.classList.add(type);
        }
    }


    function renderSettings() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        const appSettings =
            ensureAppSettings(profile);

        settingsUsername.value =
            profile.username || "";

        settingsAnimations.checked =
            appSettings.animations;

        settingsAmbient.checked =
            appSettings.ambientEffects;

        settingsSoundEffects.checked =
            appSettings.soundEffects;

        settingsGreeting.checked =
            appSettings.timeGreeting;

        settingsCompactMobile.checked =
            appSettings.compactMobile;

        settingsAchievementNotifications.checked =
            appSettings.achievementNotifications;

        settingsThemeNotifications.checked =
            appSettings.themeNotifications;

        settingsBirthdayNotifications.checked =
            appSettings.birthdayNotifications;

        settingsCurrentThemeName.textContent =
            currentThemeName(profile);

        settingsInfoPeople.textContent =
            profile.characters.length;

        settingsInfoEvents.textContent =
            profile.events.length;

        settingsInfoJournal.textContent =
            profile.journal.length;

        settingsInfoConnections.textContent =
            profile.relationships.length;

        showSettingsMessage(
            settingsProfileMessage,
            ""
        );

        showSettingsMessage(
            settingsDataMessage,
            ""
        );
    }


    function openSettings() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        applyAppSettings(profile);
        renderSettings();
        showScreen(settingsScreen);
    }


    function saveUsernameSetting() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const username =
            settingsUsername.value.trim();

        if (username.length < 2) {
            showSettingsMessage(
                settingsProfileMessage,
                "Username needs at least 2 characters.",
                "error"
            );
            return;
        }

        profile.username = username;

        saveProfile(profile);
        updateProfileDisplay(profile);

        showSettingsMessage(
            settingsProfileMessage,
            "Username saved.",
            "success"
        );
    }


    async function changePasswordSetting() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const current =
            settingsCurrentPassword.value;

        const next =
            settingsNewPassword.value;

        const confirm =
            settingsConfirmPassword.value;

        if (!current) {
            showSettingsMessage(
                settingsProfileMessage,
                "Enter your current password.",
                "error"
            );
            return;
        }

        if (next.length < 4) {
            showSettingsMessage(
                settingsProfileMessage,
                "New password needs at least 4 characters.",
                "error"
            );
            return;
        }

        if (next !== confirm) {
            showSettingsMessage(
                settingsProfileMessage,
                "New passwords do not match.",
                "error"
            );
            return;
        }

        const currentHash =
            await hashPassword(current);

        if (
            currentHash !==
            profile.passwordHash
        ) {
            showSettingsMessage(
                settingsProfileMessage,
                "Current password is incorrect.",
                "error"
            );
            return;
        }

        profile.passwordHash =
            await hashPassword(next);

        saveProfile(profile);

        settingsCurrentPassword.value = "";
        settingsNewPassword.value = "";
        settingsConfirmPassword.value = "";

        showSettingsMessage(
            settingsProfileMessage,
            "Password changed.",
            "success"
        );
    }


    function saveToggleSettings() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const appSettings =
            ensureAppSettings(profile);

        appSettings.animations =
            settingsAnimations.checked;

        appSettings.ambientEffects =
            settingsAmbient.checked;

        appSettings.soundEffects =
            settingsSoundEffects.checked;

        appSettings.timeGreeting =
            settingsGreeting.checked;

        appSettings.compactMobile =
            settingsCompactMobile.checked;

        appSettings.achievementNotifications =
            settingsAchievementNotifications.checked;

        appSettings.themeNotifications =
            settingsThemeNotifications.checked;

        appSettings.birthdayNotifications =
            settingsBirthdayNotifications.checked;

        saveProfile(profile);
        applyAppSettings(profile);

        if (
            dashboardGreeting &&
            dashboardScreen?.classList.contains("active")
        ) {
            dashboardGreeting.textContent =
                appSettings.timeGreeting
                    ? getGreeting()
                    : "Welcome back,";
        }
    }


    function exportSwanData() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const backup = {
            swanBackupVersion: 1,
            exportedAt:
                new Date().toISOString(),
            profile
        };

        const blob =
            new Blob(
                [
                    JSON.stringify(
                        backup,
                        null,
                        2
                    )
                ],
                {
                    type: "application/json"
                }
            );

        const url =
            URL.createObjectURL(blob);

        const link =
            document.createElement("a");

        const safeUsername =
            (profile.username || "profile")
                .replace(
                    /[^a-z0-9_-]+/gi,
                    "_"
                );

        link.href = url;

        link.download =
            `SWAN_${safeUsername}_backup.json`;

        document.body.appendChild(link);
        link.click();
        link.remove();

        URL.revokeObjectURL(url);

        showSettingsMessage(
            settingsDataMessage,
            "Backup exported.",
            "success"
        );
    }


    function importSwanData(file) {
        if (!file) return;

        const reader =
            new FileReader();

        reader.onload = () => {
            try {
                const parsed =
                    JSON.parse(reader.result);

                const importedProfile =
                    parsed?.profile || parsed;

                if (
                    !importedProfile ||
                    typeof importedProfile !== "object" ||
                    !importedProfile.username ||
                    !importedProfile.passwordHash
                ) {
                    throw new Error(
                        "Invalid SWAN backup."
                    );
                }

                const confirmed =
                    confirm(
                        "Import this backup?\n\nYour current local SWAN data will be replaced."
                    );

                if (!confirmed) {
                    settingsImportData.value = "";
                    return;
                }

                const cleanProfile =
                    normaliseProfile(
                        importedProfile
                    );

                ensureAppSettings(cleanProfile);

                saveProfile(cleanProfile);

                calculateUnlockedThemes(cleanProfile);
                updateAchievements(cleanProfile);
                applyTheme(
                    cleanProfile.currentTheme ||
                    "default"
                );
                applyAppSettings(cleanProfile);
                updateProfileDisplay(cleanProfile);

                renderSettings();

                showSettingsMessage(
                    settingsDataMessage,
                    "Backup imported successfully.",
                    "success"
                );

            } catch (error) {
                console.error(error);

                showSettingsMessage(
                    settingsDataMessage,
                    "That file is not a valid SWAN backup.",
                    "error"
                );
            }

            settingsImportData.value = "";
        };

        reader.onerror = () => {
            showSettingsMessage(
                settingsDataMessage,
                "SWAN could not read that file.",
                "error"
            );
        };

        reader.readAsText(file);
    }


    function resetAllSwanData() {
        const firstConfirm =
            confirm(
                "Delete ALL SWAN data on this device?\n\nThis cannot be undone unless you exported a backup."
            );

        if (!firstConfirm) return;

        const secondConfirm =
            confirm(
                "Final confirmation: permanently reset your SWAN world?"
            );

        if (!secondConfirm) return;

        localStorage.removeItem(PROFILE_KEY);

        document.body.className = "";
        document.body.dataset.swanTheme =
            "default";

        createProfileForm?.reset();
        loginForm?.reset();

        openProfileScreen();
    }


    /* =====================================
       ACHIEVEMENTS
    ====================================== */

    const SWAN_ACHIEVEMENTS = [
        {
            id: "first_person",
            name: "Someone Appears",
            description: "Add your first person to SWAN.",
            icon: "◉",
            colour: "#73cefa",
            getProgress(profile) {
                return {
                    current: Math.min(1, profile.characters.length),
                    target: 1
                };
            }
        },
        {
            id: "five_people",
            name: "A Growing World",
            description: "Add 5 people.",
            icon: "◎",
            colour: "#8bb8ff",
            getProgress(profile) {
                return {
                    current: Math.min(5, profile.characters.length),
                    target: 5
                };
            }
        },
        {
            id: "first_event",
            name: "A Memory Forms",
            description: "Record your first event.",
            icon: "✦",
            colour: "#f4aa4f",
            getProgress(profile) {
                return {
                    current: Math.min(1, profile.events.length),
                    target: 1
                };
            }
        },
        {
            id: "ten_events",
            name: "Memory Keeper",
            description: "Record 10 events.",
            icon: "✧",
            colour: "#e59a48",
            getProgress(profile) {
                return {
                    current: Math.min(10, profile.events.length),
                    target: 10
                };
            }
        },
        {
            id: "first_journal",
            name: "Inner Voice",
            description: "Write your first journal entry.",
            icon: "≡",
            colour: "#f58abb",
            getProgress(profile) {
                return {
                    current: Math.min(1, profile.journal.length),
                    target: 1
                };
            }
        },
        {
            id: "five_journal",
            name: "Pages of You",
            description: "Write 5 journal entries.",
            icon: "▤",
            colour: "#d983a6",
            getProgress(profile) {
                return {
                    current: Math.min(5, profile.journal.length),
                    target: 5
                };
            }
        },
        {
            id: "first_connection",
            name: "Connected",
            description: "Create your first relationship-map connection.",
            icon: "↔",
            colour: "#83d77c",
            getProgress(profile) {
                return {
                    current: Math.min(1, profile.relationships.length),
                    target: 1
                };
            }
        },
        {
            id: "five_connections",
            name: "Web of Lives",
            description: "Create 5 relationship connections.",
            icon: "⌘",
            colour: "#8da25b",
            getProgress(profile) {
                return {
                    current: Math.min(5, profile.relationships.length),
                    target: 5
                };
            }
        },
        {
            id: "three_themes",
            name: "Changing Skies",
            description: "Unlock 3 themes.",
            icon: "◈",
            colour: "#aa7dff",
            getProgress(profile) {
                const unlocked =
                    calculateUnlockedThemes(profile);

                return {
                    current: Math.min(3, unlocked.size),
                    target: 3
                };
            }
        },
        {
            id: "all_themes",
            name: "Master of Nothingness",
            description: "Unlock every theme.",
            icon: "◆",
            colour: "#8d7cf6",
            getProgress(profile) {
                const unlocked =
                    calculateUnlockedThemes(profile);

                return {
                    current: Math.min(SWAN_THEMES.length, unlocked.size),
                    target: SWAN_THEMES.length
                };
            }
        },
        {
            id: "high_trust",
            name: "Deep Trust",
            description: "Have at least one person with Trust rated 9.",
            icon: "♡",
            colour: "#7fc8a9",
            getProgress(profile) {
                const highest =
                    profile.characters.reduce(
                        (max, character) =>
                            Math.max(
                                max,
                                Number(character.ratings?.trust || 0)
                            ),
                        0
                    );

                return {
                    current: Math.min(9, highest),
                    target: 9
                };
            }
        },
        {
            id: "world_builder",
            name: "World Builder",
            description: "Reach 10 people, 10 events, and 5 journal entries.",
            icon: "★",
            colour: "#c3a66d",
            getProgress(profile) {
                const peoplePart =
                    Math.min(10, profile.characters.length) / 10;

                const eventsPart =
                    Math.min(10, profile.events.length) / 10;

                const journalPart =
                    Math.min(5, profile.journal.length) / 5;

                const current =
                    Math.round(
                        ((peoplePart + eventsPart + journalPart) / 3) * 100
                    );

                return {
                    current,
                    target: 100,
                    customText:
                        `${profile.characters.length}/10 people · ${profile.events.length}/10 events · ${profile.journal.length}/5 journal`
                };
            }
        }
    ];


    function updateAchievements(profile) {
        profile.achievements =
            Array.isArray(profile.achievements)
                ? profile.achievements
                : [];

        const unlocked =
            new Set(profile.achievements);

        SWAN_ACHIEVEMENTS.forEach(achievement => {
            const progress =
                achievement.getProgress(profile);

            if (progress.current >= progress.target) {
                unlocked.add(achievement.id);
            }
        });

        profile.achievements =
            Array.from(unlocked);

        saveProfile(profile);

        return unlocked;
    }


    function renderAchievements() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile || !achievementsGrid) {
            return;
        }

        const unlocked =
            updateAchievements(profile);

        achievementsGrid.innerHTML = "";

        achievementsCount.textContent =
            `${unlocked.size} / ${SWAN_ACHIEVEMENTS.length}`;

        achievementsProgressFill.style.width =
            `${(unlocked.size / SWAN_ACHIEVEMENTS.length) * 100}%`;


        SWAN_ACHIEVEMENTS.forEach(achievement => {
            const progress =
                achievement.getProgress(profile);

            const isUnlocked =
                unlocked.has(achievement.id);

            const percent =
                Math.max(
                    0,
                    Math.min(
                        100,
                        (progress.current / progress.target) * 100
                    )
                );

            const card =
                document.createElement("article");

            card.className =
                `achievement-card ${isUnlocked ? "unlocked" : "locked"}`;

            card.style.setProperty(
                "--achievement-colour",
                achievement.colour
            );

            card.innerHTML = `
                <div class="achievement-icon">
                    ${escapeHtml(achievement.icon)}
                </div>

                <h3>
                    ${escapeHtml(achievement.name)}
                </h3>

                <p>
                    ${escapeHtml(achievement.description)}
                </p>

                <div class="achievement-status">
                    <div class="achievement-status-row">
                        <span class="achievement-status-label">
                            ${isUnlocked ? "UNLOCKED" : "PROGRESS"}
                        </span>

                        <span class="achievement-status-number">
                            ${
                                progress.customText
                                    ? escapeHtml(progress.customText)
                                    : `${progress.current} / ${progress.target}`
                            }
                        </span>
                    </div>

                    <div class="achievement-progress-track">
                        <div
                            class="achievement-progress-fill"
                            style="width:${percent}%"
                        ></div>
                    </div>

                    ${
                        isUnlocked
                            ? '<div class="achievement-unlocked-badge">ACHIEVEMENT UNLOCKED</div>'
                            : ""
                    }
                </div>
            `;

            achievementsGrid.appendChild(card);
        });
    }


    function openAchievements() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        renderAchievements();
        showScreen(achievementsScreen);
    }


    /* =====================================
       THEMES + UNLOCKS
    ====================================== */

    const SWAN_THEMES = [
        {
            id: "default",
            name: "Daydream",
            description: "The original bright SWAN world.",
            unlockText: "Unlocked from the beginning.",
            preview: {
                sky: "#9bddfb",
                bg: "#f4f0e5",
                surface: "#ffffff",
                border: "#252525",
                accent: "#f4aa4f",
                accent2: "#73cefa",
                accent3: "#f58abb"
            }
        },
        {
            id: "twilight",
            name: "Twilight",
            description: "Soft violet skies and a darker evening world.",
            unlockText: "Unlock by adding 3 people.",
            preview: {
                sky: "#4d4878",
                bg: "#25243a",
                surface: "#35334f",
                border: "#171623",
                accent: "#f09bb6",
                accent2: "#8bb8ff",
                accent3: "#b996ff"
            }
        },
        {
            id: "rose",
            name: "Rosewater",
            description: "Muted pinks with a soft romantic atmosphere.",
            unlockText: "Unlock by writing 3 journal entries.",
            preview: {
                sky: "#efb8cc",
                bg: "#f8e8ee",
                surface: "#fff8fb",
                border: "#4c2735",
                accent: "#d95f8d",
                accent2: "#ef9fba",
                accent3: "#b84d72"
            }
        },
        {
            id: "ocean",
            name: "Ocean Glass",
            description: "Cool blue tones inspired by water and glass.",
            unlockText: "Unlock by recording 5 events.",
            preview: {
                sky: "#8fd4e6",
                bg: "#e6f4f7",
                surface: "#f8ffff",
                border: "#163d49",
                accent: "#48a9c5",
                accent2: "#6fd0e7",
                accent3: "#7e9fe6"
            }
        },
        {
            id: "forest",
            name: "Quiet Forest",
            description: "Natural greens and warm earthy details.",
            unlockText: "Unlock by creating 3 relationship connections.",
            preview: {
                sky: "#b7d6b0",
                bg: "#e7efe5",
                surface: "#f8fbf6",
                border: "#243a2a",
                accent: "#88a95b",
                accent2: "#8bc7a2",
                accent3: "#c5a879"
            }
        },
        {
            id: "void",
            name: "Nothingness",
            description: "A dark abstract theme inspired by SWAN's full name.",
            unlockText: "Unlock with 5 people, 10 events, and 5 journal entries.",
            preview: {
                sky: "#252541",
                bg: "#0e0e12",
                surface: "#19191f",
                border: "#050507",
                accent: "#8b7cff",
                accent2: "#50c8ff",
                accent3: "#ff6ba9"
            }
        }
    ];


    function calculateUnlockedThemes(profile) {
        const unlocked =
            new Set(
                Array.isArray(profile.unlockedThemes)
                    ? profile.unlockedThemes
                    : ["default"]
            );

        unlocked.add("default");

        if (profile.characters.length >= 3) {
            unlocked.add("twilight");
        }

        if (profile.journal.length >= 3) {
            unlocked.add("rose");
        }

        if (profile.events.length >= 5) {
            unlocked.add("ocean");
        }

        if (profile.relationships.length >= 3) {
            unlocked.add("forest");
        }

        if (
            profile.characters.length >= 5 &&
            profile.events.length >= 10 &&
            profile.journal.length >= 5
        ) {
            unlocked.add("void");
        }

        profile.unlockedThemes =
            Array.from(unlocked);

        if (
            !profile.currentTheme ||
            !unlocked.has(profile.currentTheme)
        ) {
            profile.currentTheme = "default";
        }

        saveProfile(profile);

        return unlocked;
    }


    function applyTheme(themeId) {
        const profile =
            normaliseProfile(getProfile());

        const theme =
            SWAN_THEMES.find(
                item => item.id === themeId
            );

        if (!theme) {
            themeId = "default";
        }

        document.body.dataset.swanTheme =
            themeId || "default";

        if (profile) {
            const unlocked =
                calculateUnlockedThemes(profile);

            if (unlocked.has(themeId)) {
                profile.currentTheme = themeId;
                saveProfile(profile);
            }
        }
    }


    function getThemeUnlockProgress(profile, themeId) {
        if (themeId === "twilight") {
            return {
                current:
                    Math.min(3, profile.characters.length),
                target: 3,
                text:
                    `${Math.min(3, profile.characters.length)} / 3 people`
            };
        }

        if (themeId === "rose") {
            return {
                current:
                    Math.min(3, profile.journal.length),
                target: 3,
                text:
                    `${Math.min(3, profile.journal.length)} / 3 journal entries`
            };
        }

        if (themeId === "ocean") {
            return {
                current:
                    Math.min(5, profile.events.length),
                target: 5,
                text:
                    `${Math.min(5, profile.events.length)} / 5 events`
            };
        }

        if (themeId === "forest") {
            return {
                current:
                    Math.min(3, profile.relationships.length),
                target: 3,
                text:
                    `${Math.min(3, profile.relationships.length)} / 3 connections`
            };
        }

        if (themeId === "void") {
            const peoplePart =
                Math.min(5, profile.characters.length) / 5;

            const eventsPart =
                Math.min(10, profile.events.length) / 10;

            const journalPart =
                Math.min(5, profile.journal.length) / 5;

            return {
                current:
                    Math.round(
                        ((peoplePart + eventsPart + journalPart) / 3) * 100
                    ),
                target: 100,
                text:
                    `${profile.characters.length}/5 people · ${profile.events.length}/10 events · ${profile.journal.length}/5 journal`
            };
        }

        return {
            current: 1,
            target: 1,
            text: "Unlocked"
        };
    }


    function renderThemes() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile || !themesGrid) {
            return;
        }

        const unlocked =
            calculateUnlockedThemes(profile);

        themesGrid.innerHTML = "";

        themesUnlockedCount.textContent =
            `${unlocked.size} / ${SWAN_THEMES.length}`;

        const nextLocked =
            SWAN_THEMES.find(
                theme => !unlocked.has(theme.id)
            );

        themesNextUnlock.textContent =
            nextLocked
                ? `${nextLocked.name}: ${nextLocked.unlockText}`
                : "Every theme unlocked.";


        SWAN_THEMES.forEach(theme => {
            const isUnlocked =
                unlocked.has(theme.id);

            const isCurrent =
                profile.currentTheme === theme.id;

            const progress =
                getThemeUnlockProgress(
                    profile,
                    theme.id
                );

            const card =
                document.createElement("article");

            card.className =
                "theme-card";

            if (!isUnlocked) {
                card.classList.add("locked");
            }

            if (isCurrent) {
                card.classList.add("current");
            }

            card.innerHTML = `
                <div
                    class="theme-preview"
                    style="
                        --preview-sky:${theme.preview.sky};
                        --preview-bg:${theme.preview.bg};
                        --preview-surface:${theme.preview.surface};
                        --preview-border:${theme.preview.border};
                        --preview-accent:${theme.preview.accent};
                        --preview-accent2:${theme.preview.accent2};
                        --preview-accent3:${theme.preview.accent3};
                    "
                >
                    <div class="theme-preview-sky"></div>
                    <div class="theme-preview-ground"></div>

                    <div class="theme-preview-dot one"></div>
                    <div class="theme-preview-dot two"></div>
                    <div class="theme-preview-dot three"></div>

                    <div class="theme-preview-panel"></div>
                </div>

                <h3>
                    ${escapeHtml(theme.name)}
                </h3>

                <p>
                    ${escapeHtml(theme.description)}
                </p>

                ${
                    !isUnlocked
                        ? `
                            <div class="theme-lock-copy">
                                🔒 ${escapeHtml(progress.text)}
                            </div>
                        `
                        : ""
                }

                <div class="theme-card-footer">
                    <span class="theme-status">
                        ${
                            isCurrent
                                ? "CURRENT"
                                : isUnlocked
                                    ? "UNLOCKED"
                                    : "LOCKED"
                        }
                    </span>

                    <button
                        type="button"
                        class="theme-select-button"
                        data-theme-id="${escapeHtml(theme.id)}"
                        ${!isUnlocked || isCurrent ? "disabled" : ""}
                    >
                        ${
                            isCurrent
                                ? "SELECTED"
                                : isUnlocked
                                    ? "USE THEME"
                                    : "LOCKED"
                        }
                    </button>
                </div>
            `;


            card
                .querySelector(".theme-select-button")
                ?.addEventListener(
                    "click",
                    () => {
                        if (!isUnlocked) {
                            return;
                        }

                        const updated =
                            normaliseProfile(getProfile());

                        updated.currentTheme =
                            theme.id;

                        saveProfile(updated);

                        applyTheme(theme.id);
                        renderThemes();
                    }
                );


            themesGrid.appendChild(card);
        });
    }


    function openThemes() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        calculateUnlockedThemes(profile);
        applyTheme(profile.currentTheme || "default");
        renderThemes();
        showScreen(themesScreen);
    }


    /* =====================================
       STATISTICS
    ====================================== */

    function characterAverageRating(character) {
        if (!character?.ratings) return null;

        const values =
            Object.values(character.ratings)
                .map(Number)
                .filter(value =>
                    !Number.isNaN(value) &&
                    value >= 1 &&
                    value <= 9
                );

        if (values.length === 0) return null;

        return (
            values.reduce(
                (sum, value) => sum + value,
                0
            ) / values.length
        );
    }


    function renderStatistics() {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        statisticsPeopleTotal.textContent =
            profile.characters.length;

        statisticsEventsTotal.textContent =
            profile.events.length;

        statisticsJournalTotal.textContent =
            profile.journal.length;

        statisticsAverageRating.textContent =
            calculateAverageRating(profile);


        /* EVENT IMPACT */

        const impacts = {
            positive: 0,
            neutral: 0,
            negative: 0
        };

        profile.events.forEach(event => {
            const impact =
                event.impact || "neutral";

            if (impacts[impact] !== undefined) {
                impacts[impact]++;
            }
        });

        const totalEvents =
            Math.max(
                1,
                profile.events.length
            );

        impactPositiveCount.textContent =
            impacts.positive;

        impactNeutralCount.textContent =
            impacts.neutral;

        impactNegativeCount.textContent =
            impacts.negative;

        impactPositiveBar.style.width =
            `${(impacts.positive / totalEvents) * 100}%`;

        impactNeutralBar.style.width =
            `${(impacts.neutral / totalEvents) * 100}%`;

        impactNegativeBar.style.width =
            `${(impacts.negative / totalEvents) * 100}%`;


        /* TOP PEOPLE */

        const rankedPeople =
            profile.characters
                .map(character => ({
                    character,
                    average:
                        characterAverageRating(character)
                }))
                .filter(item =>
                    item.average !== null
                )
                .sort(
                    (a, b) =>
                        b.average - a.average
                )
                .slice(0, 5);

        statisticsTopPeople.innerHTML = "";

        if (rankedPeople.length === 0) {
            statisticsTopPeople.innerHTML =
                '<p class="statistics-empty">No ratings yet.</p>';
        } else {
            rankedPeople.forEach((item, index) => {
                const row =
                    document.createElement("div");

                row.className =
                    "statistics-ranking-item";

                row.innerHTML = `
                    <div class="statistics-ranking-item-left">
                        <strong>
                            ${index + 1}. ${escapeHtml(item.character.name)}
                        </strong>

                        <small>
                            ${escapeHtml(item.character.relationship || "Person")}
                        </small>
                    </div>

                    <span class="statistics-score">
                        ${item.average.toFixed(1)}
                    </span>
                `;

                statisticsTopPeople.appendChild(row);
            });
        }


        /* EMOTIONS */

        const emotionCounts = {};

        profile.characters.forEach(character => {
            (character.emotions || [])
                .forEach(emotion => {
                    emotionCounts[emotion] =
                        (emotionCounts[emotion] || 0) + 1;
                });
        });

        const sortedEmotions =
            Object.entries(emotionCounts)
                .sort((a, b) => b[1] - a[1])
                .slice(0, 10);

        statisticsEmotions.innerHTML = "";

        if (sortedEmotions.length === 0) {
            statisticsEmotions.innerHTML =
                '<p class="statistics-empty">No emotions assigned yet.</p>';
        } else {
            sortedEmotions.forEach(([name, count]) => {
                const emotion =
                    profile.emotions.find(
                        item => item.name === name
                    );

                const chip =
                    document.createElement("span");

                chip.className =
                    "statistics-tag";

                chip.style.background =
                    emotion?.color || "#eeeeee";

                chip.textContent =
                    `${name} ×${count}`;

                statisticsEmotions.appendChild(chip);
            });
        }


        /* MOODS */

        const moodCounts = {};

        profile.journal.forEach(entry => {
            const mood =
                entry.mood || "neutral";

            moodCounts[mood] =
                (moodCounts[mood] || 0) + 1;
        });

        const sortedMoods =
            Object.entries(moodCounts)
                .sort((a, b) => b[1] - a[1]);

        const maxMoodCount =
            Math.max(
                1,
                ...sortedMoods.map(
                    item => item[1]
                )
            );

        statisticsMoods.innerHTML = "";

        if (sortedMoods.length === 0) {
            statisticsMoods.innerHTML =
                '<p class="statistics-empty">No journal moods yet.</p>';
        } else {
            sortedMoods.forEach(([mood, count]) => {
                const row =
                    document.createElement("div");

                row.className =
                    "statistics-mood-item";

                row.innerHTML = `
                    <strong>
                        ${escapeHtml(titleCase(mood))}
                    </strong>

                    <div class="statistics-mood-bar">
                        <div
                            class="statistics-mood-fill"
                            style="width:${(count / maxMoodCount) * 100}%"
                        ></div>
                    </div>

                    <span>
                        ${count}
                    </span>
                `;

                statisticsMoods.appendChild(row);
            });
        }


        /* RELATIONSHIPS */

        const rankedRelationships =
            [...profile.relationships]
                .sort(
                    (a, b) =>
                        Number(b.strength || 5) -
                        Number(a.strength || 5)
                )
                .slice(0, 5);

        statisticsRelationships.innerHTML = "";

        if (rankedRelationships.length === 0) {
            statisticsRelationships.innerHTML =
                '<p class="statistics-empty">No connections yet.</p>';
        } else {
            rankedRelationships.forEach(connection => {
                const a =
                    getCharacterById(
                        profile,
                        connection.personA
                    );

                const b =
                    getCharacterById(
                        profile,
                        connection.personB
                    );

                const row =
                    document.createElement("div");

                row.className =
                    "statistics-ranking-item";

                row.innerHTML = `
                    <div class="statistics-ranking-item-left">
                        <strong>
                            ${escapeHtml(a?.name || "Person")}
                            ↔
                            ${escapeHtml(b?.name || "Person")}
                        </strong>

                        <small>
                            ${escapeHtml(connection.type || "Connected")}
                        </small>
                    </div>

                    <span class="statistics-score">
                        ${escapeHtml(String(connection.strength || 5))}
                    </span>
                `;

                statisticsRelationships.appendChild(row);
            });
        }


        /* RECENT ACTIVITY */

        const activity = [];

        profile.events.forEach(event => {
            activity.push({
                type: "Event",
                title:
                    event.title || "Untitled event",
                date:
                    event.date ||
                    event.createdAt
            });
        });

        profile.journal.forEach(entry => {
            activity.push({
                type: "Journal",
                title:
                    entry.title ||
                    "Untitled entry",
                date:
                    entry.date ||
                    entry.createdAt
            });
        });

        profile.characters.forEach(character => {
            activity.push({
                type: "Person",
                title:
                    `Added ${character.name}`,
                date:
                    character.createdAt
            });
        });

        activity.sort(
            (a, b) =>
                new Date(b.date || 0) -
                new Date(a.date || 0)
        );

        statisticsActivity.innerHTML = "";

        if (activity.length === 0) {
            statisticsActivity.innerHTML =
                '<p class="statistics-empty">No activity yet.</p>';
        } else {
            activity
                .slice(0, 8)
                .forEach(item => {
                    const row =
                        document.createElement("div");

                    row.className =
                        "statistics-activity-item";

                    const date =
                        item.date
                            ? new Date(
                                item.date.includes?.("T")
                                    ? item.date
                                    : `${item.date}T12:00:00`
                              )
                            : null;

                    let displayDate = "—";

                    if (
                        date &&
                        !Number.isNaN(date.getTime())
                    ) {
                        displayDate =
                            new Intl.DateTimeFormat(
                                undefined,
                                {
                                    day: "numeric",
                                    month: "short",
                                    year: "numeric"
                                }
                            ).format(date);
                    }

                    row.innerHTML = `
                        <div class="statistics-activity-item-left">
                            <strong>
                                ${escapeHtml(item.title)}
                            </strong>

                            <small>
                                ${escapeHtml(item.type)}
                            </small>
                        </div>

                        <span class="journal-entry-date">
                            ${escapeHtml(displayDate)}
                        </span>
                    `;

                    statisticsActivity.appendChild(row);
                });
        }
    }


    function openStatistics() {
        renderStatistics();
        showScreen(statisticsScreen);
    }


    /* =====================================
       JOURNAL
    ====================================== */

    function journalDateText(value) {
        if (!value) return "No date";

        const date =
            new Date(`${value}T12:00:00`);

        if (Number.isNaN(date.getTime())) {
            return value;
        }

        return new Intl.DateTimeFormat(
            undefined,
            {
                day: "numeric",
                month: "short",
                year: "numeric"
            }
        ).format(date);
    }


    function titleCase(value = "") {
        return value
            .charAt(0)
            .toUpperCase() +
            value.slice(1);
    }


    function renderJournalPeopleOptions(
        selectedIds = []
    ) {
        const profile =
            normaliseProfile(getProfile());

        if (!profile || !journalPeopleOptions) {
            return;
        }

        const selected =
            new Set(selectedIds);

        journalPeopleOptions.innerHTML = "";

        if (profile.characters.length === 0) {
            journalPeopleOptions.innerHTML =
                '<p class="profile-empty-copy">No people have been added yet.</p>';
            return;
        }

        profile.characters.forEach(character => {
            const label =
                document.createElement("label");

            label.className =
                "journal-person-option";

            label.innerHTML = `
                <input
                    type="checkbox"
                    name="journal-person"
                    value="${escapeHtml(character.id)}"
                    ${selected.has(character.id) ? "checked" : ""}
                >

                <span>
                    <span
                        class="journal-person-avatar"
                        style="background:${escapeHtml(character.avatar?.clothes || "#72cfff")}"
                    >
                        ${escapeHtml(character.name.charAt(0).toUpperCase())}
                    </span>

                    <strong>
                        ${escapeHtml(character.name)}
                    </strong>
                </span>
            `;

            journalPeopleOptions.appendChild(label);
        });
    }


    function getSelectedJournalPeople() {
        return Array.from(
            document.querySelectorAll(
                '#journal-people-options input[name="journal-person"]:checked'
            )
        ).map(input => input.value);
    }


    function journalStats(profile) {
        const entries =
            profile.journal || [];

        const now =
            new Date();

        const monthCount =
            entries.filter(entry => {
                if (!entry.date) return false;

                const date =
                    new Date(
                        `${entry.date}T12:00:00`
                    );

                return (
                    date.getMonth() ===
                        now.getMonth() &&
                    date.getFullYear() ===
                        now.getFullYear()
                );
            }).length;


        const moodCounts = {};

        entries.forEach(entry => {
            const mood =
                entry.mood || "neutral";

            moodCounts[mood] =
                (moodCounts[mood] || 0) + 1;
        });


        let commonMood = "—";
        let highest = 0;

        Object.entries(moodCounts)
            .forEach(([mood, count]) => {
                if (count > highest) {
                    commonMood =
                        titleCase(mood);

                    highest = count;
                }
            });


        return {
            total: entries.length,
            monthCount,
            commonMood
        };
    }


    function renderJournal(filter = "") {
        const profile =
            normaliseProfile(getProfile());

        if (
            !profile ||
            !journalEntryList ||
            !journalEmptyState
        ) {
            return;
        }

        const search =
            filter.trim().toLowerCase();

        const stats =
            journalStats(profile);

        journalEntryCount.textContent =
            stats.total;

        journalMonthCount.textContent =
            stats.monthCount;

        journalCommonMood.textContent =
            stats.commonMood;


        const entries =
            [...profile.journal]
                .sort((a, b) => {
                    if (
                        Boolean(a.favourite) !==
                        Boolean(b.favourite)
                    ) {
                        return a.favourite
                            ? -1
                            : 1;
                    }

                    const aDate =
                        new Date(
                            a.date ||
                            a.createdAt ||
                            0
                        ).getTime();

                    const bDate =
                        new Date(
                            b.date ||
                            b.createdAt ||
                            0
                        ).getTime();

                    return bDate - aDate;
                })
                .filter(entry => {
                    const peopleNames =
                        (entry.people || [])
                            .map(id =>
                                profile.characters
                                    .find(
                                        person =>
                                            person.id === id
                                    )
                                    ?.name || ""
                            )
                            .join(" ");

                    return [
                        entry.title,
                        entry.body,
                        entry.mood,
                        peopleNames
                    ]
                        .join(" ")
                        .toLowerCase()
                        .includes(search);
                });


        journalEntryList.innerHTML = "";

        journalEmptyState.classList.toggle(
            "show",
            profile.journal.length === 0
        );

        if (profile.journal.length === 0) {
            return;
        }

        journalEmptyState.classList.remove("show");


        entries.forEach(entry => {
            const card =
                document.createElement("article");

            card.className =
                "journal-entry-card";

            if (entry.favourite) {
                card.classList.add("favourite");
            }

            const people =
                (entry.people || [])
                    .map(id =>
                        profile.characters.find(
                            person =>
                                person.id === id
                        )
                    )
                    .filter(Boolean);


            const preview =
                (entry.body || "")
                    .replace(/\s+/g, " ")
                    .trim()
                    .slice(0, 220);


            card.innerHTML = `
                <div class="journal-entry-card-top">
                    <h3>
                        ${escapeHtml(
                            entry.title ||
                            "Untitled Entry"
                        )}
                    </h3>

                    <span class="journal-entry-date">
                        ${escapeHtml(
                            journalDateText(entry.date)
                        )}
                    </span>
                </div>

                <p class="journal-entry-preview">
                    ${escapeHtml(preview)}
                    ${entry.body?.length > 220 ? "…" : ""}
                </p>

                <div class="journal-entry-meta">
                    <span class="journal-mood-pill">
                        ${escapeHtml(
                            titleCase(
                                entry.mood ||
                                "neutral"
                            )
                        )}
                    </span>

                    ${people
                        .map(person => `
                            <span class="journal-person-pill">
                                ${escapeHtml(person.name)}
                            </span>
                        `)
                        .join("")}
                </div>
            `;


            card.addEventListener(
                "click",
                () =>
                    openJournalEditor(entry.id)
            );

            journalEntryList.appendChild(card);
        });
    }


    function openJournal() {
        renderJournal(
            journalSearch?.value || ""
        );

        showScreen(journalScreen);
    }


    function setJournalEditorMode(editing) {
        journalEditorHeading.textContent =
            editing
                ? "Edit Entry"
                : "New Entry";

        journalSaveTopButton.textContent =
            editing
                ? "SAVE CHANGES"
                : "SAVE";

        journalSaveBottomButton.textContent =
            editing
                ? "SAVE CHANGES"
                : "SAVE ENTRY";

        journalDeleteButton.classList.toggle(
            "hidden",
            !editing
        );
    }


    function openJournalEditor(entryId = null) {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        editingJournalEntryId =
            entryId;

        journalForm.reset();
        journalFormMessage.textContent = "";

        const today =
            new Date();

        journalDate.value = [
            today.getFullYear(),
            String(
                today.getMonth() + 1
            ).padStart(2, "0"),
            String(
                today.getDate()
            ).padStart(2, "0")
        ].join("-");

        journalMood.value = "neutral";

        if (!entryId) {
            setJournalEditorMode(false);
            renderJournalPeopleOptions();
            showScreen(journalEditorScreen);
            return;
        }


        const entry =
            profile.journal.find(
                item =>
                    item.id === entryId
            );

        if (!entry) {
            editingJournalEntryId = null;
            openJournal();
            return;
        }

        setJournalEditorMode(true);

        journalTitle.value =
            entry.title || "";

        journalDate.value =
            entry.date ||
            journalDate.value;

        journalMood.value =
            entry.mood ||
            "neutral";

        journalBody.value =
            entry.body || "";

        journalFavourite.checked =
            Boolean(entry.favourite);

        renderJournalPeopleOptions(
            entry.people || []
        );

        showScreen(journalEditorScreen);
    }


    function saveJournalEntry(event) {
        event.preventDefault();

        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const body =
            journalBody.value.trim();

        if (!body) {
            journalFormMessage.textContent =
                "Write something before saving.";

            journalBody.focus();
            return;
        }


        const data = {
            title:
                journalTitle.value.trim(),

            date:
                journalDate.value,

            mood:
                journalMood.value,

            body,

            people:
                getSelectedJournalPeople(),

            favourite:
                journalFavourite.checked
        };


        if (editingJournalEntryId) {
            const index =
                profile.journal.findIndex(
                    entry =>
                        entry.id ===
                        editingJournalEntryId
                );

            if (index === -1) {
                journalFormMessage.textContent =
                    "SWAN could not find this entry.";
                return;
            }

            profile.journal[index] = {
                ...profile.journal[index],
                ...data,
                updatedAt:
                    new Date().toISOString()
            };

        } else {
            profile.journal.push({
                id:
                    `journal_${Date.now()}_${Math.random().toString(16).slice(2)}`,

                ...data,

                createdAt:
                    new Date().toISOString()
            });
        }


        saveProfile(profile);

        editingJournalEntryId = null;

        openJournal();
    }


    function deleteJournalEntry() {
        if (!editingJournalEntryId) {
            return;
        }

        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const entry =
            profile.journal.find(
                item =>
                    item.id ===
                    editingJournalEntryId
            );

        if (!entry) return;

        const confirmed =
            confirm(
                `Delete "${entry.title || "this journal entry"}"?\n\nThis cannot be undone.`
            );

        if (!confirmed) return;

        profile.journal =
            profile.journal.filter(
                item =>
                    item.id !==
                    editingJournalEntryId
            );

        saveProfile(profile);

        editingJournalEntryId = null;

        openJournal();
    }


    /* =====================================
       RELATIONSHIP MAP / FAMILY TREE
    ====================================== */

    function getCharacterById(profile, id) {
        return profile.characters.find(character => character.id === id) || null;
    }


    function ensureRelationshipPositions(profile) {
        profile.relationshipMap = profile.relationshipMap || {};
        profile.relationshipMap.positions =
            profile.relationshipMap.positions || {};

        const count = Math.max(profile.characters.length, 1);

        profile.characters.forEach((character, index) => {
            if (profile.relationshipMap.positions[character.id]) {
                return;
            }

            const angle =
                (Math.PI * 2 * index) / count - Math.PI / 2;

            const radius =
                Math.min(280, 140 + count * 12);

            const x =
                0.5 + Math.cos(angle) * (radius / 900);

            const y =
                0.5 + Math.sin(angle) * (radius / 620);

            profile.relationshipMap.positions[character.id] = {
                x: Math.max(.08, Math.min(.82, x)),
                y: Math.max(.08, Math.min(.78, y))
            };
        });

        saveProfile(profile);
    }


    function relationshipNodeCenter(node) {
        return {
            x: node.offsetLeft + node.offsetWidth / 2,
            y: node.offsetTop + node.offsetHeight / 2
        };
    }


    function drawRelationshipLines(profile) {
        if (!relationshipLines || !relationshipNodes) return;

        relationshipLines.innerHTML = "";

        const width = relationshipMap.clientWidth;
        const height = relationshipMap.clientHeight;

        relationshipLines.setAttribute("viewBox", `0 0 ${width} ${height}`);

        (profile.relationships || []).forEach(connection => {
            const nodeA =
                relationshipNodes.querySelector(
                    `[data-person-id="${CSS.escape(connection.personA)}"]`
                );

            const nodeB =
                relationshipNodes.querySelector(
                    `[data-person-id="${CSS.escape(connection.personB)}"]`
                );

            if (!nodeA || !nodeB) return;

            const a = relationshipNodeCenter(nodeA);
            const b = relationshipNodeCenter(nodeB);

            const strength =
                Math.max(1, Math.min(9, Number(connection.strength || 5)));

            const line =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "line"
                );

            line.setAttribute("x1", a.x);
            line.setAttribute("y1", a.y);
            line.setAttribute("x2", b.x);
            line.setAttribute("y2", b.y);
            line.setAttribute(
                "class",
                strength >= 7
                    ? "relationship-line relationship-line-strong"
                    : "relationship-line"
            );

            relationshipLines.appendChild(line);


            const label =
                document.createElementNS(
                    "http://www.w3.org/2000/svg",
                    "text"
                );

            label.setAttribute("x", (a.x + b.x) / 2);
            label.setAttribute("y", (a.y + b.y) / 2 - 8);
            label.setAttribute("text-anchor", "middle");
            label.setAttribute("class", "relationship-line-label");
            label.textContent = connection.type || "Connected";

            relationshipLines.appendChild(label);
        });
    }


    function positionRelationshipNode(node, position) {
        const mapWidth = relationshipMap.clientWidth;
        const mapHeight = relationshipMap.clientHeight;

        const maxLeft =
            Math.max(0, mapWidth - node.offsetWidth - 10);

        const maxTop =
            Math.max(0, mapHeight - node.offsetHeight - 10);

        const left =
            Math.max(
                10,
                Math.min(
                    maxLeft,
                    position.x * mapWidth
                )
            );

        const top =
            Math.max(
                10,
                Math.min(
                    maxTop,
                    position.y * mapHeight
                )
            );

        node.style.left = `${left}px`;
        node.style.top = `${top}px`;
    }


    function renderRelationshipMap() {
        const profile = normaliseProfile(getProfile());

        if (!profile || !relationshipNodes) return;

        ensureRelationshipPositions(profile);

        relationshipNodes.innerHTML = "";

        relationshipEmptyState.classList.toggle(
            "show",
            profile.characters.length < 2
        );


        profile.characters.forEach(character => {
            const node = document.createElement("button");

            node.type = "button";
            node.className = "relationship-node";
            node.dataset.personId = character.id;

            node.innerHTML = `
                <div
                    class="relationship-node-avatar"
                    style="background:${escapeHtml(character.avatar?.clothes || "#72cfff")}"
                >
                    ${escapeHtml(character.name.charAt(0).toUpperCase())}
                </div>

                <div class="relationship-node-name">
                    ${escapeHtml(character.name)}
                </div>

                <div class="relationship-node-hint">
                    CLICK FOR CONNECTIONS
                </div>
            `;

            relationshipNodes.appendChild(node);

            const position =
                profile.relationshipMap.positions[character.id] || {
                    x: .5,
                    y: .5
                };

            requestAnimationFrame(() => {
                positionRelationshipNode(node, position);
                drawRelationshipLines(profile);
            });


            node.addEventListener("click", event => {
                if (node.dataset.dragged === "true") {
                    node.dataset.dragged = "false";
                    return;
                }

                showPersonRelationships(character.id);
            });


            let pointerOffsetX = 0;
            let pointerOffsetY = 0;
            let moved = false;

            node.addEventListener("pointerdown", event => {
                draggedRelationshipNodeId = character.id;
                moved = false;

                const rect = node.getBoundingClientRect();

                pointerOffsetX =
                    event.clientX - rect.left;

                pointerOffsetY =
                    event.clientY - rect.top;

                node.setPointerCapture(event.pointerId);
            });


            node.addEventListener("pointermove", event => {
                if (draggedRelationshipNodeId !== character.id) {
                    return;
                }

                moved = true;

                const mapRect =
                    relationshipMap.getBoundingClientRect();

                let left =
                    event.clientX -
                    mapRect.left -
                    pointerOffsetX;

                let top =
                    event.clientY -
                    mapRect.top -
                    pointerOffsetY;

                left = Math.max(
                    10,
                    Math.min(
                        relationshipMap.clientWidth -
                        node.offsetWidth -
                        10,
                        left
                    )
                );

                top = Math.max(
                    10,
                    Math.min(
                        relationshipMap.clientHeight -
                        node.offsetHeight -
                        10,
                        top
                    )
                );

                node.style.left = `${left}px`;
                node.style.top = `${top}px`;

                drawRelationshipLines(profile);
            });


            node.addEventListener("pointerup", event => {
                if (draggedRelationshipNodeId !== character.id) {
                    return;
                }

                draggedRelationshipNodeId = null;

                if (moved) {
                    node.dataset.dragged = "true";

                    const updated =
                        normaliseProfile(getProfile());

                    updated.relationshipMap =
                        updated.relationshipMap || {};

                    updated.relationshipMap.positions =
                        updated.relationshipMap.positions || {};

                    updated.relationshipMap.positions[character.id] = {
                        x:
                            parseFloat(node.style.left) /
                            relationshipMap.clientWidth,

                        y:
                            parseFloat(node.style.top) /
                            relationshipMap.clientHeight
                    };

                    saveProfile(updated);
                }

                try {
                    node.releasePointerCapture(event.pointerId);
                } catch (_) {}
            });
        });


        requestAnimationFrame(() => {
            drawRelationshipLines(profile);
        });
    }


    function openRelationshipMap() {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        showScreen(relationshipMapScreen);

        requestAnimationFrame(() => {
            renderRelationshipMap();
        });
    }


    function populateRelationshipPersonSelects() {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        relationshipPersonA.innerHTML = "";
        relationshipPersonB.innerHTML = "";

        profile.characters.forEach(character => {
            const optionA = document.createElement("option");
            optionA.value = character.id;
            optionA.textContent = character.name;

            const optionB = document.createElement("option");
            optionB.value = character.id;
            optionB.textContent = character.name;

            relationshipPersonA.appendChild(optionA);
            relationshipPersonB.appendChild(optionB);
        });

        if (profile.characters.length > 1) {
            relationshipPersonB.selectedIndex = 1;
        }
    }


    function openRelationshipEditor(connectionId = null) {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        if (profile.characters.length < 2) {
            alert("Add at least two people before creating a connection.");
            openPeopleScreen();
            return;
        }

        editingRelationshipId = connectionId;

        populateRelationshipPersonSelects();

        relationshipFormMessage.textContent = "";
        relationshipModal.classList.remove("hidden");

        if (!connectionId) {
            relationshipModalTitle.textContent =
                "Add Connection";

            relationshipType.value = "";
            relationshipDescription.value = "";
            relationshipStrength.value = "5";
            relationshipStrengthValue.textContent = "5";

            relationshipDeleteButton.classList.add("hidden");
            return;
        }

        const connection =
            profile.relationships.find(
                item => item.id === connectionId
            );

        if (!connection) {
            closeRelationshipModal();
            return;
        }

        relationshipModalTitle.textContent =
            "Edit Connection";

        relationshipPersonA.value =
            connection.personA;

        relationshipPersonB.value =
            connection.personB;

        relationshipType.value =
            connection.type || "";

        relationshipDescription.value =
            connection.description || "";

        relationshipStrength.value =
            String(connection.strength || 5);

        relationshipStrengthValue.textContent =
            String(connection.strength || 5);

        relationshipDeleteButton.classList.remove("hidden");
    }


    function closeRelationshipModal() {
        relationshipModal.classList.add("hidden");
        editingRelationshipId = null;
    }


    function saveRelationshipConnection() {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        const personA =
            relationshipPersonA.value;

        const personB =
            relationshipPersonB.value;

        if (!personA || !personB) {
            relationshipFormMessage.textContent =
                "Choose two people.";
            return;
        }

        if (personA === personB) {
            relationshipFormMessage.textContent =
                "Choose two different people.";
            return;
        }

        const duplicate =
            profile.relationships.find(connection => {
                if (
                    editingRelationshipId &&
                    connection.id === editingRelationshipId
                ) {
                    return false;
                }

                return (
                    connection.personA === personA &&
                    connection.personB === personB
                ) || (
                    connection.personA === personB &&
                    connection.personB === personA
                );
            });

        if (duplicate) {
            relationshipFormMessage.textContent =
                "Those two people already have a connection.";
            return;
        }

        const data = {
            personA,
            personB,
            type:
                relationshipType.value.trim() ||
                "Connected",
            description:
                relationshipDescription.value.trim(),
            strength:
                Number(relationshipStrength.value || 5)
        };

        if (editingRelationshipId) {
            const index =
                profile.relationships.findIndex(
                    item => item.id === editingRelationshipId
                );

            if (index !== -1) {
                profile.relationships[index] = {
                    ...profile.relationships[index],
                    ...data,
                    updatedAt:
                        new Date().toISOString()
                };
            }
        } else {
            profile.relationships.push({
                id:
                    `relationship_${Date.now()}_${Math.random().toString(16).slice(2)}`,
                ...data,
                createdAt:
                    new Date().toISOString()
            });
        }

        saveProfile(profile);

        closeRelationshipModal();
        renderRelationshipMap();
    }


    function deleteRelationshipConnection() {
        if (!editingRelationshipId) return;

        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        const connection =
            profile.relationships.find(
                item => item.id === editingRelationshipId
            );

        if (!connection) return;

        const personA =
            getCharacterById(profile, connection.personA);

        const personB =
            getCharacterById(profile, connection.personB);

        const confirmed =
            confirm(
                `Delete the connection between ${personA?.name || "Person 1"} and ${personB?.name || "Person 2"}?`
            );

        if (!confirmed) return;

        profile.relationships =
            profile.relationships.filter(
                item => item.id !== editingRelationshipId
            );

        saveProfile(profile);

        closeRelationshipModal();
        renderRelationshipMap();
    }


    function showRelationshipDetails(connectionId) {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        const connection =
            profile.relationships.find(
                item => item.id === connectionId
            );

        if (!connection) return;

        const personA =
            getCharacterById(profile, connection.personA);

        const personB =
            getCharacterById(profile, connection.personB);

        selectedRelationshipId = connectionId;

        relationshipDetailsTitle.textContent =
            `${personA?.name || "Person"} + ${personB?.name || "Person"}`;

        relationshipDetailsPersonA.textContent =
            personA?.name || "Person 1";

        relationshipDetailsPersonB.textContent =
            personB?.name || "Person 2";

        relationshipDetailsPersonA.dataset.personId =
            connection.personA;

        relationshipDetailsPersonB.dataset.personId =
            connection.personB;

        relationshipDetailsType.textContent =
            connection.type || "Connected";

        relationshipDetailsDescription.textContent =
            connection.description ||
            "No description has been added yet.";

        const strength =
            Math.max(
                1,
                Math.min(
                    9,
                    Number(connection.strength || 5)
                )
            );

        relationshipStrengthFill.style.width =
            `${(strength / 9) * 100}%`;

        relationshipDetailsStrengthValue.textContent =
            `${strength} / 9`;

        relationshipDetailsModal.classList.remove("hidden");
    }


    function closeRelationshipDetails() {
        relationshipDetailsModal.classList.add("hidden");
        selectedRelationshipId = null;
    }


    function showPersonRelationships(personId) {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        const connections =
            profile.relationships.filter(
                connection =>
                    connection.personA === personId ||
                    connection.personB === personId
            );

        if (connections.length === 0) {
            const person =
                getCharacterById(profile, personId);

            alert(
                `${person?.name || "This person"} has no saved connections yet.`
            );

            return;
        }

        if (connections.length === 1) {
            showRelationshipDetails(connections[0].id);
            return;
        }

        const person =
            getCharacterById(profile, personId);

        const choices =
            connections.map((connection, index) => {
                const otherId =
                    connection.personA === personId
                        ? connection.personB
                        : connection.personA;

                const other =
                    getCharacterById(profile, otherId);

                return `${index + 1}. ${other?.name || "Person"} — ${connection.type || "Connected"}`;
            });

        const answer =
            prompt(
                `${person?.name || "This person"} has multiple connections:\n\n${choices.join("\n")}\n\nEnter the number you want to view:`
            );

        const index =
            Number(answer) - 1;

        if (
            Number.isInteger(index) &&
            index >= 0 &&
            index < connections.length
        ) {
            showRelationshipDetails(
                connections[index].id
            );
        }
    }


    function resetRelationshipPositions() {
        const profile = normaliseProfile(getProfile());

        if (!profile) return;

        profile.relationshipMap = {
            positions: {}
        };

        saveProfile(profile);
        renderRelationshipMap();
    }


    /* =====================================
       EVENTS
    ====================================== */



    /* =====================================
       LOCAL ATTACHMENT STORAGE
       Uses IndexedDB so photos/files do not
       have to fit inside localStorage.
    ====================================== */

    const SWAN_ATTACHMENT_DB =
        "swanAttachmentDatabase";

    const SWAN_ATTACHMENT_STORE =
        "eventAttachments";

    let swanAttachmentDbPromise = null;


    function openSwanAttachmentDatabase() {
        if (swanAttachmentDbPromise) {
            return swanAttachmentDbPromise;
        }

        swanAttachmentDbPromise =
            new Promise((resolve, reject) => {
                const request =
                    indexedDB.open(
                        SWAN_ATTACHMENT_DB,
                        1
                    );

                request.onupgradeneeded =
                    event => {
                        const db =
                            event.target.result;

                        if (
                            !db.objectStoreNames.contains(
                                SWAN_ATTACHMENT_STORE
                            )
                        ) {
                            db.createObjectStore(
                                SWAN_ATTACHMENT_STORE,
                                {
                                    keyPath: "id"
                                }
                            );
                        }
                    };

                request.onsuccess =
                    () => resolve(request.result);

                request.onerror =
                    () => reject(request.error);
            });

        return swanAttachmentDbPromise;
    }


    async function saveAttachmentBlob(
        attachmentId,
        eventId,
        file
    ) {
        const db =
            await openSwanAttachmentDatabase();

        return new Promise((resolve, reject) => {
            const transaction =
                db.transaction(
                    SWAN_ATTACHMENT_STORE,
                    "readwrite"
                );

            const store =
                transaction.objectStore(
                    SWAN_ATTACHMENT_STORE
                );

            store.put({
                id: attachmentId,
                eventId,
                name: file.name,
                type:
                    file.type ||
                    "application/octet-stream",
                size: file.size,
                lastModified:
                    file.lastModified || Date.now(),
                blob: file
            });

            transaction.oncomplete =
                () => resolve();

            transaction.onerror =
                () => reject(
                    transaction.error
                );
        });
    }


    async function getAttachmentBlob(
        attachmentId
    ) {
        const db =
            await openSwanAttachmentDatabase();

        return new Promise((resolve, reject) => {
            const transaction =
                db.transaction(
                    SWAN_ATTACHMENT_STORE,
                    "readonly"
                );

            const request =
                transaction
                    .objectStore(
                        SWAN_ATTACHMENT_STORE
                    )
                    .get(attachmentId);

            request.onsuccess =
                () =>
                    resolve(
                        request.result ||
                        null
                    );

            request.onerror =
                () =>
                    reject(request.error);
        });
    }


    async function deleteAttachmentBlob(
        attachmentId
    ) {
        const db =
            await openSwanAttachmentDatabase();

        return new Promise((resolve, reject) => {
            const transaction =
                db.transaction(
                    SWAN_ATTACHMENT_STORE,
                    "readwrite"
                );

            transaction
                .objectStore(
                    SWAN_ATTACHMENT_STORE
                )
                .delete(attachmentId);

            transaction.oncomplete =
                () => resolve();

            transaction.onerror =
                () => reject(
                    transaction.error
                );
        });
    }


    async function deleteEventAttachmentBlobs(
        memory
    ) {
        const attachments =
            memory?.attachments || [];

        await Promise.allSettled(
            attachments
                .filter(item => item.id)
                .map(item =>
                    deleteAttachmentBlob(
                        item.id
                    )
                )
        );
    }


    function clearEventAttachmentObjectUrls() {
        eventAttachmentObjectUrls.forEach(
            url =>
                URL.revokeObjectURL(url)
        );

        eventAttachmentObjectUrls = [];
    }


    function attachmentSizeText(bytes) {
        const size =
            Number(bytes || 0);

        if (size < 1024) {
            return `${size} B`;
        }

        if (size < 1024 * 1024) {
            return `${(size / 1024).toFixed(1)} KB`;
        }

        return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }


    function createAttachmentMetadata(
        file,
        eventId
    ) {
        return {
            id:
                `attachment_${Date.now()}_${Math.random().toString(16).slice(2)}`,
            eventId,
            name: file.name,
            type:
                file.type ||
                "application/octet-stream",
            size: file.size,
            savedAt:
                new Date().toISOString()
        };
    }


    /* =====================================
       SMART RELATIONSHIP SCORING
    ====================================== */

    function getSelectedEventImpact() {
        return (
            document.querySelector(
                'input[name="event-impact"]:checked'
            )?.value || "neutral"
        );
    }


    function buildEventScoreSuggestion() {
        const impact =
            getSelectedEventImpact();

        const importance =
            Number(
                eventImportance?.value || 3
            );

        const strength =
            importance >= 5
                ? 3
                : importance >= 4
                    ? 2
                    : importance >= 2
                        ? 1
                        : 0;

        const direction =
            impact === "positive"
                ? 1
                : impact === "negative"
                    ? -1
                    : 0;

        const suggestion = {
            trust: 0,
            love: 0,
            respect: 0,
            comfort: 0,
            communication: 0,
            fun: 0,
            reliability: 0
        };


        if (direction === 0) {
            return suggestion;
        }


        /*
            Base logic:
            - Trust, respect, comfort and communication respond
              to most meaningful interpersonal events.
            - Love changes more slowly.
            - Fun is more sensitive to positive memories.
            - Reliability changes mainly in medium/major events.
        */

        const base =
            Math.max(
                1,
                Math.min(
                    3,
                    strength
                )
            );

        suggestion.trust =
            direction * base;

        suggestion.respect =
            direction *
            Math.max(
                1,
                base - 1
            );

        suggestion.comfort =
            direction *
            Math.max(
                1,
                base - 1
            );

        suggestion.communication =
            direction *
            Math.max(
                1,
                base - 1
            );


        if (impact === "positive") {
            suggestion.fun =
                importance >= 2
                    ? Math.min(2, base)
                    : 0;

            suggestion.love =
                importance >= 4
                    ? 1
                    : 0;

            suggestion.reliability =
                importance >= 3
                    ? Math.min(2, base)
                    : 0;
        }


        if (impact === "negative") {
            suggestion.reliability =
                importance >= 2
                    ? -Math.min(2, base)
                    : 0;

            suggestion.love =
                importance >= 5
                    ? -1
                    : 0;

            suggestion.fun =
                importance >= 3
                    ? -1
                    : 0;
        }


        return suggestion;
    }


    function eventImportanceLabel(value) {
        const labels = {
            1: "Small",
            2: "Low",
            3: "Medium",
            4: "Important",
            5: "Major"
        };

        return labels[
            Number(value)
        ] || "Medium";
    }


    function updateEventScoreSuggestionPreview() {
        if (
            !eventAutoScoreSummary ||
            !eventAutoScoreExplanation
        ) {
            return;
        }

        const impact =
            getSelectedEventImpact();

        const importance =
            Number(
                eventImportance?.value || 3
            );

        const suggestion =
            buildEventScoreSuggestion();

        const changed =
            Object.entries(suggestion)
                .filter(
                    ([, value]) =>
                        value !== 0
                )
                .map(
                    ([name, value]) =>
                        `${titleCase(name)} ${value > 0 ? "+" : ""}${value}`
                );

        eventAutoScoreSummary.textContent =
            `${titleCase(impact)} · ${eventImportanceLabel(importance)} importance`;

        eventAutoScoreExplanation.textContent =
            changed.length
                ? changed.join(" · ")
                : "SWAN suggests no automatic rating changes for this event.";
    }


    function applyEventScoreSuggestion() {
        const suggestion =
            buildEventScoreSuggestion();

        ratingNames.forEach(name => {
            const select =
                $(`event-change-${name}`);

            if (!select) return;

            const value =
                Number(
                    suggestion[name] || 0
                );

            select.value =
                String(value);

            select.classList.remove(
                "auto-positive",
                "auto-negative",
                "auto-neutral"
            );

            select.classList.add(
                value > 0
                    ? "auto-positive"
                    : value < 0
                        ? "auto-negative"
                        : "auto-neutral"
            );
        });

        updateEventScoreSuggestionPreview();
    }


    function formatEventDate(value) {
        if (!value) return "No date";
        const date = new Date(`${value}T12:00:00`);
        if (Number.isNaN(date.getTime())) return value;

        return new Intl.DateTimeFormat(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        }).format(date);
    }

    function populateRatingChangeSelects() {
        document.querySelectorAll("[data-rating-change]").forEach(select => {
            select.innerHTML = "";

            for (let value = -3; value <= 3; value++) {
                const option = document.createElement("option");
                option.value = String(value);
                option.textContent = value > 0 ? `+${value}` : String(value);
                if (value === 0) option.selected = true;
                select.appendChild(option);
            }
        });
    }

    function renderEventPeopleOptions(preselectedIds = []) {
        const profile = normaliseProfile(getProfile());
        if (!profile || !eventPeopleOptions) return;

        const selected = new Set(preselectedIds);
        eventPeopleOptions.innerHTML = "";

        profile.characters.forEach(character => {
            const label = document.createElement("label");
            label.className = "event-person-option";
            label.innerHTML = `
                <input type="checkbox" name="event-person" value="${escapeHtml(character.id)}" ${selected.has(character.id) ? "checked" : ""}>
                <span>
                    <span class="event-person-dot" style="background:${escapeHtml(character.avatar?.clothes || "#72cfff")}">
                        ${escapeHtml(character.name.charAt(0).toUpperCase())}
                    </span>
                    <strong>${escapeHtml(character.name)}</strong>
                </span>
            `;
            eventPeopleOptions.appendChild(label);
        });
    }

    function renderAttachmentNames() {
        if (!eventAttachmentList) return;

        const profile =
            normaliseProfile(getProfile());

        eventAttachmentList.innerHTML = "";


        if (editingEventId && profile) {
            const memory =
                profile.events.find(
                    item =>
                        item.id ===
                        editingEventId
                );

            (memory?.attachments || [])
                .filter(
                    item =>
                        !removedEventAttachmentIds.has(
                            item.id
                        )
                )
                .forEach(item => {
                    const chip =
                        document.createElement("span");

                    chip.className =
                        "attachment-chip";

                    chip.innerHTML = `
                        ${escapeHtml(item.name)}
                        <button
                            type="button"
                            class="attachment-chip-remove"
                            aria-label="Remove attachment"
                        >
                            ×
                        </button>
                    `;

                    chip
                        .querySelector(
                            ".attachment-chip-remove"
                        )
                        ?.addEventListener(
                            "click",
                            () => {
                                removedEventAttachmentIds.add(
                                    item.id
                                );

                                renderAttachmentNames();
                            }
                        );

                    eventAttachmentList.appendChild(
                        chip
                    );
                });
        }


        Array.from(
            eventAttachments?.files || []
        ).forEach(file => {
            const chip =
                document.createElement("span");

            chip.className =
                "attachment-chip";

            chip.innerHTML = `
                <span class="attachment-new-label">NEW</span>
                ${escapeHtml(file.name)}
            `;

            eventAttachmentList.appendChild(
                chip
            );
        });


        if (
            eventAttachmentList.children.length ===
            0
        ) {
            const empty =
                document.createElement("p");

            empty.className =
                "event-attachment-empty";

            empty.textContent =
                "No attachments selected.";

            eventAttachmentList.appendChild(
                empty
            );
        }
    }

    function openEventCreator(preselectedCharacterId = null, eventId = null) {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        if (profile.characters.length === 0) {
            alert("Add at least one person before creating an event.");
            openCharacterCreator();
            return;
        }

        eventSourceCharacterId = preselectedCharacterId;
        editingEventId = eventId;
        removedEventAttachmentIds = new Set();

        eventForm.reset();
        eventFormMessage.textContent = "";
        eventAttachmentList.innerHTML = "";

        const today = new Date();
        eventDate.value = [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");

        eventImportance.value = "3";

        populateRatingChangeSelects();
        updateEventScoreSuggestionPreview();

        if (!eventId) {
            renderEventPeopleOptions(
                preselectedCharacterId
                    ? [preselectedCharacterId]
                    : []
            );

            const heading = $("event-creator-heading");
            if (heading) heading.textContent = "Add Event";

            if (eventSaveTopButton) {
                eventSaveTopButton.textContent = "SAVE";
            }

            if (eventSaveBottomButton) {
                eventSaveBottomButton.textContent = "SAVE EVENT";
            }

            renderAttachmentNames();
            showScreen(eventCreatorScreen);
            return;
        }

        const memory = profile.events.find(
            item => item.id === eventId
        );

        if (!memory) {
            editingEventId = null;
            openEventsScreen();
            return;
        }

        eventTitle.value = memory.title || "";
        eventDate.value = memory.date || eventDate.value;
        eventImportance.value = String(memory.importance || 3);
        eventDescription.value = memory.description || "";

        renderEventPeopleOptions(memory.people || []);

        const impactInput = document.querySelector(
            `input[name="event-impact"][value="${memory.impact || "neutral"}"]`
        );

        if (impactInput) {
            impactInput.checked = true;
        }

        ratingNames.forEach(name => {
            const select = $(`event-change-${name}`);

            if (select) {
                select.value = String(
                    memory.ratingChanges?.[name] || 0
                );
            }
        });

        updateEventScoreSuggestionPreview();

        const heading = $("event-creator-heading");
        if (heading) heading.textContent = "Edit Event";

        if (eventSaveTopButton) {
            eventSaveTopButton.textContent = "SAVE CHANGES";
        }

        if (eventSaveBottomButton) {
            eventSaveBottomButton.textContent = "SAVE CHANGES";
        }

        renderAttachmentNames();

        showScreen(eventCreatorScreen);
    }

    function getEventSelectedPeople() {
        return Array.from(
            document.querySelectorAll('#event-people-options input[name="event-person"]:checked')
        ).map(input => input.value);
    }

    function getEventRatingChanges() {
        const changes = {};

    ratingNames.forEach(name => {
            changes[name] = Number($(`event-change-${name}`)?.value || 0);
        });

        return changes;
    }

    function applyEventRatingChanges(profile, personIds, changes) {
        personIds.forEach(personId => {
            const character = profile.characters.find(item => item.id === personId);
            if (!character) return;

            character.ratings = character.ratings || {};

            ratingNames.forEach(name => {
                const current = Number(character.ratings[name] ?? 5);
                const delta = Number(changes[name] ?? 0);

                character.ratings[name] = Math.max(1, Math.min(9, current + delta));
            });
        });
    }

    async function saveEvent(event) {
        event.preventDefault();

        const profile = normaliseProfile(getProfile());
        if (!profile) return;

        const title = eventTitle.value.trim();
        const people = getEventSelectedPeople();

        if (!title) {
            eventFormMessage.textContent = "Please give this event a title.";
            eventTitle.focus();
            return;
        }

        if (people.length === 0) {
            eventFormMessage.textContent = "Select at least one person involved.";
            return;
        }

        const impact =
            document.querySelector('input[name="event-impact"]:checked')?.value || "neutral";

        const ratingChanges = getEventRatingChanges();

        const newFiles =
            Array.from(
                eventAttachments?.files || []
            );

        const eventData = {
            title,
            date: eventDate.value,
            description: eventDescription.value.trim(),
            importance: Number(eventImportance.value || 3),
            impact,
            people,
            ratingChanges
        };


        if (editingEventId) {
            const index =
                profile.events.findIndex(
                    item => item.id === editingEventId
                );

            if (index === -1) {
                eventFormMessage.textContent =
                    "SWAN could not find this event.";
                return;
            }

            const oldMemory =
                profile.events[index];

            /*
                Undo the old rating changes first, then apply the
                new ones. This prevents repeated edits from stacking
                rating changes over and over.
            */
            const reversedChanges = {};

            ratingNames.forEach(name => {
                reversedChanges[name] =
                    -Number(
                        oldMemory.ratingChanges?.[name] || 0
                    );
            });

            applyEventRatingChanges(
                profile,
                oldMemory.people || [],
                reversedChanges
            );


            /* Remove event reference from everybody first. */
            profile.characters.forEach(character => {
                character.events =
                    Array.isArray(character.events)
                        ? character.events.filter(
                            id => id !== oldMemory.id
                          )
                        : [];
            });


            const retainedAttachments =
                (oldMemory.attachments || [])
                    .filter(
                        item =>
                            !removedEventAttachmentIds.has(
                                item.id
                            )
                    );

            const addedAttachments = [];

            for (const file of newFiles) {
                const metadata =
                    createAttachmentMetadata(
                        file,
                        oldMemory.id
                    );

                try {
                    await saveAttachmentBlob(
                        metadata.id,
                        oldMemory.id,
                        file
                    );

                    addedAttachments.push(
                        metadata
                    );
                } catch (error) {
                    console.error(
                        "SWAN could not save attachment:",
                        error
                    );

                    eventFormMessage.textContent =
                        `Could not save ${file.name}. Try a smaller file or check browser storage.`;

                    return;
                }
            }


            for (
                const attachmentId
                of removedEventAttachmentIds
            ) {
                try {
                    await deleteAttachmentBlob(
                        attachmentId
                    );
                } catch (error) {
                    console.error(
                        "Could not remove attachment:",
                        error
                    );
                }
            }


            profile.events[index] = {
                ...oldMemory,
                ...eventData,
                attachments: [
                    ...retainedAttachments,
                    ...addedAttachments
                ],
                updatedAt:
                    new Date().toISOString()
            };


            people.forEach(personId => {
                const character =
                    profile.characters.find(
                        item => item.id === personId
                    );

                if (!character) return;

                character.events =
                    Array.isArray(character.events)
                        ? character.events
                        : [];

                if (
                    !character.events.includes(
                        oldMemory.id
                    )
                ) {
                    character.events.push(
                        oldMemory.id
                    );
                }
            });


            applyEventRatingChanges(
                profile,
                people,
                ratingChanges
            );

            saveProfile(profile);

            const savedEventId =
                editingEventId;

            editingEventId = null;
            eventSourceCharacterId = null;

            openEventsScreen();
            showEventDetails(savedEventId);
            return;
        }


        const newEventId =
            `event_${Date.now()}_${Math.random().toString(16).slice(2)}`;

        const storedAttachments = [];

        for (const file of newFiles) {
            const metadata =
                createAttachmentMetadata(
                    file,
                    newEventId
                );

            try {
                await saveAttachmentBlob(
                    metadata.id,
                    newEventId,
                    file
                );

                storedAttachments.push(
                    metadata
                );
            } catch (error) {
                console.error(
                    "SWAN could not save attachment:",
                    error
                );

                eventFormMessage.textContent =
                    `Could not save ${file.name}. Try a smaller file or check browser storage.`;

                return;
            }
        }


        const memory = {
            id: newEventId,

            ...eventData,

            attachments:
                storedAttachments,

            createdAt:
                new Date().toISOString()
        };

        profile.events.push(memory);

        people.forEach(personId => {
            const character =
                profile.characters.find(
                    item => item.id === personId
                );

            if (!character) return;

            character.events =
                Array.isArray(character.events)
                    ? character.events
                    : [];

            character.events.push(memory.id);
        });

        applyEventRatingChanges(
            profile,
            people,
            ratingChanges
        );

        saveProfile(profile);

        const returnToCharacter =
            eventSourceCharacterId;

        eventSourceCharacterId = null;

        if (returnToCharacter) {
            selectedCharacterId =
                returnToCharacter;

            openCharacterProfile(
                returnToCharacter
            );
        } else {
            openEventsScreen();
        }
    }


    async function showEventDetails(eventId) {
        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const memory =
            profile.events.find(
                item => item.id === eventId
            );

        if (!memory) return;

        selectedEventId = eventId;

        eventDetailsTitle.textContent =
            memory.title || "Untitled Event";

        eventDetailsDate.textContent =
            formatEventDate(memory.date);

        eventDetailsImpact.textContent =
            (memory.impact || "neutral")
                .toUpperCase();

        eventDetailsImpact.className =
            `event-pill ${memory.impact || "neutral"}`;

        eventDetailsImportance.textContent =
            `Importance ${memory.importance || 3}`;

        eventDetailsDescription.textContent =
            memory.description ||
            "No description has been added.";

        eventDetailsPeople.innerHTML = "";

        (memory.people || [])
            .forEach(personId => {
                const person =
                    profile.characters.find(
                        character =>
                            character.id === personId
                    );

                if (!person) return;

                const button =
                    document.createElement("button");

                button.type = "button";
                button.className =
                    "event-details-person-button";

                button.textContent =
                    person.name;

                button.addEventListener(
                    "click",
                    () => {
                        closeEventDetails();
                        selectedCharacterId =
                            person.id;

                        openCharacterProfile(
                            person.id
                        );
                    }
                );

                eventDetailsPeople.appendChild(
                    button
                );
            });


        clearEventAttachmentObjectUrls();

        if (eventDetailsAttachments) {
            eventDetailsAttachments.innerHTML = "";

            const attachments =
                memory.attachments || [];

            if (attachments.length === 0) {
                eventDetailsAttachments.innerHTML =
                    '<p class="event-attachment-empty">No attachments.</p>';
            }


            for (const attachment of attachments) {
                const card =
                    document.createElement("article");

                card.className =
                    "event-detail-attachment";

                let record = null;

                if (attachment.id) {
                    try {
                        record =
                            await getAttachmentBlob(
                                attachment.id
                            );
                    } catch (error) {
                        console.error(
                            "SWAN could not open attachment:",
                            error
                        );
                    }
                }

                const preview =
                    document.createElement("div");

                preview.className =
                    "event-detail-attachment-preview";


                if (
                    record?.blob &&
                    (record.type || "").startsWith(
                        "image/"
                    )
                ) {
                    const url =
                        URL.createObjectURL(
                            record.blob
                        );

                    eventAttachmentObjectUrls.push(
                        url
                    );

                    const image =
                        document.createElement("img");

                    image.src = url;
                    image.alt =
                        attachment.name || "Event image";

                    preview.appendChild(image);

                } else if (
                    record?.blob &&
                    (record.type || "").startsWith(
                        "video/"
                    )
                ) {
                    const url =
                        URL.createObjectURL(
                            record.blob
                        );

                    eventAttachmentObjectUrls.push(
                        url
                    );

                    const video =
                        document.createElement("video");

                    video.src = url;
                    video.controls = true;
                    video.preload = "metadata";

                    preview.appendChild(video);

                } else {
                    const icon =
                        document.createElement("span");

                    icon.className =
                        "event-detail-attachment-file-icon";

                    icon.textContent = "▧";

                    preview.appendChild(icon);
                }


                const info =
                    document.createElement("div");

                info.className =
                    "event-detail-attachment-info";

                info.innerHTML = `
                    <strong>${escapeHtml(attachment.name || "Attachment")}</strong>
                    <small>${escapeHtml(attachmentSizeText(attachment.size))}</small>
                `;


                const actions =
                    document.createElement("div");

                actions.className =
                    "event-detail-attachment-actions";


                if (record?.blob) {
                    const openButton =
                        document.createElement("button");

                    openButton.type = "button";
                    openButton.className =
                        "event-detail-attachment-button";

                    openButton.textContent =
                        "OPEN";

                    openButton.addEventListener(
                        "click",
                        () => {
                            const url =
                                URL.createObjectURL(
                                    record.blob
                                );

                            window.open(
                                url,
                                "_blank"
                            );

                            setTimeout(
                                () =>
                                    URL.revokeObjectURL(
                                        url
                                    ),
                                60000
                            );
                        }
                    );


                    const saveButton =
                        document.createElement("button");

                    saveButton.type = "button";
                    saveButton.className =
                        "event-detail-attachment-button";

                    saveButton.textContent =
                        "SAVE";

                    saveButton.addEventListener(
                        "click",
                        () => {
                            const url =
                                URL.createObjectURL(
                                    record.blob
                                );

                            const link =
                                document.createElement(
                                    "a"
                                );

                            link.href = url;
                            link.download =
                                attachment.name ||
                                "SWAN_attachment";

                            document.body.appendChild(
                                link
                            );

                            link.click();
                            link.remove();

                            setTimeout(
                                () =>
                                    URL.revokeObjectURL(
                                        url
                                    ),
                                1000
                            );
                        }
                    );

                    actions.appendChild(
                        openButton
                    );

                    actions.appendChild(
                        saveButton
                    );

                } else {
                    const missing =
                        document.createElement("small");

                    missing.className =
                        "event-attachment-empty";

                    missing.textContent =
                        "File data unavailable on this device.";

                    actions.appendChild(
                        missing
                    );
                }


                card.appendChild(preview);
                card.appendChild(info);
                card.appendChild(actions);

                eventDetailsAttachments.appendChild(
                    card
                );
            }
        }


        eventDetailsModal.classList.remove(
            "hidden"
        );
    }


    function closeEventDetails() {
        eventDetailsModal.classList.add(
            "hidden"
        );

        clearEventAttachmentObjectUrls();
        selectedEventId = null;
    }


    function editSelectedEvent() {
        const eventId = selectedEventId;

        if (!eventId) {
            console.error(
                "SWAN: no event selected for editing."
            );
            return;
        }

        closeEventDetails();
        openEventCreator(null, eventId);
    }


    async function deleteSelectedEvent() {
        if (!selectedEventId) return;

        const profile =
            normaliseProfile(getProfile());

        if (!profile) return;

        const memory =
            profile.events.find(
                item => item.id === selectedEventId
            );

        if (!memory) return;

        const confirmed =
            confirm(
                `Delete "${memory.title || "this event"}"?\n\nIts rating changes will also be reversed.`
            );

        if (!confirmed) return;


        const reversedChanges = {};

        ratingNames.forEach(name => {
            reversedChanges[name] =
                -Number(
                    memory.ratingChanges?.[name] || 0
                );
        });

        applyEventRatingChanges(
            profile,
            memory.people || [],
            reversedChanges
        );


        await deleteEventAttachmentBlobs(
            memory
        );

        profile.events =
            profile.events.filter(
                item =>
                    item.id !== memory.id
            );


        profile.characters
            .forEach(character => {
                character.events =
                    Array.isArray(character.events)
                        ? character.events.filter(
                            id => id !== memory.id
                          )
                        : [];
            });


        saveProfile(profile);

        closeEventDetails();
        renderEvents(
            eventsSearch?.value || ""
        );
        loadDashboard();
    }


    function renderEvents(filter = "") {
        const profile = normaliseProfile(getProfile());
        if (!profile || !eventsList || !eventsEmptyState) return;

        const search = filter.trim().toLowerCase();

        const memories = [...profile.events]
            .sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0))
            .filter(memory => {
                const peopleNames = (memory.people || [])
                    .map(id => profile.characters.find(c => c.id === id)?.name || "")
                    .join(" ");

                return [memory.title, memory.description, memory.impact, peopleNames]
                    .join(" ")
                    .toLowerCase()
                    .includes(search);
            });

        eventsList.innerHTML = "";
        eventsEmptyState.classList.toggle("show", profile.events.length === 0);

        if (profile.events.length === 0) return;
        eventsEmptyState.classList.remove("show");

        memories.forEach(memory => {
            const card = document.createElement("article");
            card.className = "event-card";

            const peopleNames = (memory.people || [])
                .map(id => profile.characters.find(c => c.id === id)?.name)
                .filter(Boolean);

            const attachmentCount = memory.attachments?.length || 0;

            card.innerHTML = `
                <div class="event-card-top">
                    <div>
                        <h3>${escapeHtml(memory.title)}</h3>
                        <div class="event-card-date">${escapeHtml(formatEventDate(memory.date))}</div>
                    </div>
                </div>

                ${memory.description ? `<p class="event-card-description">${escapeHtml(memory.description)}</p>` : ""}

                <div class="event-card-meta">
                    <span class="event-pill ${escapeHtml(memory.impact || "neutral")}">
                        ${escapeHtml((memory.impact || "neutral").toUpperCase())}
                    </span>
                    <span class="event-pill">Importance ${escapeHtml(String(memory.importance || 3))}</span>
                    ${peopleNames.length ? `<span class="event-pill">${escapeHtml(peopleNames.join(", "))}</span>` : ""}
                    ${attachmentCount ? `<span class="event-pill">${attachmentCount} attachment${attachmentCount === 1 ? "" : "s"}</span>` : ""}
                </div>
            `;

            card.addEventListener(
                "click",
                () => {
                    showEventDetails(
                        memory.id
                    );
                }
            );

            eventsList.appendChild(card);
        });
    }

    function openEventsScreen() {
        renderEvents(eventsSearch?.value || "");
        showScreen(eventsScreen);
    }

    /* =====================================
       CHARACTER PROFILE
    ====================================== */

    const characterProfileScreen = $("character-profile-screen");
    const characterProfileBackButton = $("character-profile-back-button");
    const characterProfileEditButton = $("character-profile-edit-button");
    const characterProfileDeleteButton = $("character-profile-delete-button");
    const profileAddEventButton = $("profile-add-event-button");

    function formatCharacterDate(value, fallback = "Not added") {
        if (!value) return fallback;

        const date = new Date(value.includes("T") ? value : `${value}T12:00:00`);

        if (Number.isNaN(date.getTime())) {
            return fallback;
        }

        return new Intl.DateTimeFormat(undefined, {
            day: "numeric",
            month: "short",
            year: "numeric"
        }).format(date);
    }


    function getSelectedCharacter() {
        const profile = normaliseProfile(getProfile());

        if (!profile || !selectedCharacterId) {
            return null;
        }

        return profile.characters.find(
            character => character.id === selectedCharacterId
        ) || null;
    }


    function renderCharacterProfile(character) {
        const profile = normaliseProfile(getProfile());
        if (!profile || !character) return;

        const avatar = character.avatar || {};
        const avatarFeatures = avatarFeatureData(avatar);

        $("profile-person-top-name").textContent = character.name;
        $("profile-person-name").textContent = character.name;

        if (characterProfileEditButton) {
            characterProfileEditButton.dataset.characterId = character.id;
        }

        $("profile-person-nickname").textContent =
            character.nickname ? `"${character.nickname}"` : "";

        $("profile-person-relationship").textContent =
            character.relationship || "Person";

        $("profile-person-birthday").textContent =
            formatCharacterDate(character.birthday);

        $("profile-person-created").textContent =
            formatCharacterDate(character.createdAt, "—");

        $("profile-person-hair").style.background =
            avatar.hair || "#4a2c24";

        $("profile-person-face").style.background =
            avatar.skin || "#f2c7a5";

        $("profile-person-shirt").style.background =
            avatar.clothes || "#72cfff";

        const profileFace = $("profile-person-face");
        const profileHair = $("profile-person-hair");
        const profileShirt = $("profile-person-shirt");
        const profileAccessory = $("profile-person-accessory");

        applyAvatarClass(
            profileFace,
            "profile-face-style-",
            avatarFeatures.face
        );

        applyAvatarClass(
            profileHair,
            "profile-hair-style-",
            avatarFeatures.hairStyle
        );

        applyAvatarClass(
            profileShirt,
            "profile-outfit-style-",
            avatarFeatures.outfitStyle
        );

        document
            .querySelectorAll("#profile-person-face .profile-person-eye")
            .forEach(eye => {
                eye.style.background = avatar.eyes || "#2d2d2d";
                eye.style.color = avatar.eyes || "#2d2d2d";

                applyAvatarClass(
                    eye,
                    "profile-eye-style-",
                    avatarFeatures.eyesStyle
                );
            });

        document
            .querySelectorAll("#profile-person-face .profile-person-brow")
            .forEach(brow => {
                applyAvatarClass(
                    brow,
                    "profile-brow-style-",
                    avatarFeatures.browsStyle
                );
            });

        const profileMouth =
            document.querySelector(
                "#profile-person-face .profile-person-mouth"
            );

        applyAvatarClass(
            profileMouth,
            "profile-mouth-style-",
            avatarFeatures.mouthStyle
        );

        if (profileAccessory) {
            Array.from(profileAccessory.classList)
                .filter(className =>
                    className.startsWith("profile-accessory-")
                )
                .forEach(className =>
                    profileAccessory.classList.remove(className)
                );

            profileAccessory.classList.add(
                `profile-accessory-${avatarFeatures.accessory}`
            );
        }


        const emotionContainer = $("profile-person-emotions");
        emotionContainer.innerHTML = "";

        if (!character.emotions || character.emotions.length === 0) {
            emotionContainer.innerHTML =
                '<p class="profile-empty-copy">No emotions selected yet.</p>';
        } else {
            character.emotions.forEach(name => {
                const emotion = profile.emotions.find(item => item.name === name);
                const chip = document.createElement("span");

                chip.className = "emotion-chip";
                chip.style.setProperty(
                    "--emotion-colour",
                    emotion?.color || "#eeeeee"
                );
                chip.textContent = name;

                emotionContainer.appendChild(chip);
            });
        }


        const ratingsContainer = $("profile-person-ratings");
        ratingsContainer.innerHTML = "";

        ratingNames.forEach(name => {
            const rating = Math.max(
                1,
                Math.min(9, Number(character.ratings?.[name] || 5))
            );

            const item = document.createElement("div");
            item.className = "profile-rating-item";

            const label =
                name.charAt(0).toUpperCase() + name.slice(1);

            const width = `${(rating / 9) * 100}%`;

            item.innerHTML = `
                <div class="profile-rating-item-top">
                    <span>${escapeHtml(label)}</span>
                    <strong class="profile-rating-number">${rating}</strong>
                </div>
                <div class="profile-rating-track">
                    <div
                        class="profile-rating-fill"
                        style="--rating-width:${width}"
                    ></div>
                </div>
            `;

            ratingsContainer.appendChild(item);
        });


        $("profile-person-notes").textContent =
            character.notes || "No notes yet.";

        const personEventsContainer = $("profile-person-events");
        const personEvents = (profile.events || [])
            .filter(memory => (memory.people || []).includes(character.id))
            .sort((a, b) => new Date(b.date || b.createdAt || 0) - new Date(a.date || a.createdAt || 0));

        if (personEvents.length === 0) {
            personEventsContainer.className = "profile-events-empty";
            personEventsContainer.innerHTML = `
                <span>✦</span>
                <strong>No memories recorded yet.</strong>
                <p>Events involving this person will appear here.</p>
            `;
        } else {
            personEventsContainer.className = "profile-event-list";
            personEventsContainer.innerHTML = "";

            personEvents.forEach(memory => {
                const item = document.createElement("article");
                item.className = "profile-event-item";
                item.innerHTML = `
                    <div class="profile-event-item-top">
                        <h4>${escapeHtml(memory.title)}</h4>
                        <span class="profile-event-item-date">${escapeHtml(formatEventDate(memory.date))}</span>
                    </div>
                    ${memory.description ? `<p>${escapeHtml(memory.description)}</p>` : ""}
                    <span class="profile-event-impact ${escapeHtml(memory.impact || "neutral")}">
                        ${escapeHtml((memory.impact || "neutral").toUpperCase())}
                    </span>
                `;
                item.addEventListener(
                    "click",
                    () => {
                        showEventDetails(
                            memory.id
                        );
                    }
                );

                personEventsContainer.appendChild(item);
            });
        }
    }


    function openCharacterProfile(characterId) {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        const character = profile.characters.find(
            item => item.id === characterId
        );

        if (!character) {
            openPeopleScreen();
            return;
        }

        selectedCharacterId = characterId;
        renderCharacterProfile(character);
        showScreen(characterProfileScreen);
    }


    function deleteSelectedCharacter() {
        const character = getSelectedCharacter();
        const profile = normaliseProfile(getProfile());

        if (!character || !profile) return;

        const confirmed = confirm(
            `Delete ${character.name} from your SWAN world?\n\nThis cannot be undone.`
        );

        if (!confirmed) return;

        profile.characters = profile.characters.filter(
            item => item.id !== character.id
        );

        saveProfile(profile);
        selectedCharacterId = null;
        editingCharacterId = null;
        openPeopleScreen();
    }


    function editSelectedCharacter() {
        const buttonCharacterId =
            characterProfileEditButton?.dataset.characterId;

        const characterId =
            buttonCharacterId || selectedCharacterId;

        if (!characterId) {
            console.error("SWAN: no character selected for editing.");
            return;
        }

        openCharacterEditor(characterId);
    }


    /* =====================================
       EMOTIONS
    ====================================== */

    function ensureStarterEmotions(profile) {
        if (profile.emotions.length > 0) return;

        profile.emotions = [
            { name: "Love", color: "#f58abb" },
            { name: "Like", color: "#f4aa4f" },
            { name: "Trust", color: "#73cefa" },
            { name: "Comfortable", color: "#83d77c" },
            { name: "Unsure", color: "#d6d6d6" },
            { name: "Complicated", color: "#aa7dff" }
        ];

        saveProfile(profile);
    }


    function renderEmotionOptions() {
        const profile = normaliseProfile(getProfile());
        if (!profile || !emotionOptions) return;

        ensureStarterEmotions(profile);

        emotionOptions.innerHTML = "";

        profile.emotions.forEach((emotion, index) => {
            const label = document.createElement("label");
            label.className = "emotion-option";

            label.innerHTML = `
                <input
                    type="checkbox"
                    name="character-emotion"
                    value="${escapeHtml(emotion.name)}"
                    data-emotion-index="${index}"
                >
                <span style="--emotion-colour:${escapeHtml(emotion.color)}">
                    ${escapeHtml(emotion.name)}
                </span>
            `;

            emotionOptions.appendChild(label);
        });

        if (emotionCount) {
            emotionCount.textContent = profile.emotions.length;
        }
    }


    function addCustomEmotion() {
        const name = newEmotionName.value.trim();
        const color = newEmotionColor.value;

        if (!name) return;

        const profile = normaliseProfile(getProfile());
        if (!profile) return;

        const alreadyExists = profile.emotions.some(
            emotion => emotion.name.toLowerCase() === name.toLowerCase()
        );

        if (alreadyExists) {
            characterFormMessage.textContent = "That emotion already exists.";
            return;
        }

        profile.emotions.push({ name, color });
        saveProfile(profile);

        newEmotionName.value = "";
        characterFormMessage.textContent = "";

        renderEmotionOptions();

        const inputs = emotionOptions.querySelectorAll('input[name="character-emotion"]');
        const newest = inputs[inputs.length - 1];
        if (newest) newest.checked = true;
    }


    /* =====================================
       CHARACTER CREATOR
    ====================================== */

    function applyAvatarClass(element, prefix, value, maxNumber = null) {
        if (!element) return;

        const classes = Array.from(element.classList);

        classes.forEach(className => {
            if (className.startsWith(prefix)) {
                element.classList.remove(className);
            }
        });

        element.classList.add(`${prefix}${value}`);
    }


    function setAvatarOption(group, value) {
        if (group === "accessory") {
            avatarStyleState[group] = value;
        } else {
            avatarStyleState[group] = Number(value);
        }

        document
            .querySelectorAll(`[data-avatar-option="${group}"] .avatar-option`)
            .forEach(button => {
                button.classList.toggle(
                    "active",
                    button.dataset.value === String(value)
                );
            });

        updateAvatarPreview();
    }


    function resetAvatarStyleState() {
        avatarStyleState.face = 1;
        avatarStyleState.hairStyle = 1;
        avatarStyleState.eyesStyle = 1;
        avatarStyleState.browsStyle = 1;
        avatarStyleState.mouthStyle = 1;
        avatarStyleState.accessory = "none";
        avatarStyleState.outfitStyle = 1;

        Object.entries(avatarStyleState).forEach(([group, value]) => {
            document
                .querySelectorAll(`[data-avatar-option="${group}"] .avatar-option`)
                .forEach(button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.value === String(value)
                    );
                });
        });
    }


    function loadAvatarStyleState(avatar = {}) {
        avatarStyleState.face = Number(avatar.face || 1);
        avatarStyleState.hairStyle = Number(avatar.hairStyle || 1);
        avatarStyleState.eyesStyle = Number(avatar.eyesStyle || 1);
        avatarStyleState.browsStyle = Number(avatar.browsStyle || 1);
        avatarStyleState.mouthStyle = Number(avatar.mouthStyle || 1);
        avatarStyleState.accessory = avatar.accessory || "none";
        avatarStyleState.outfitStyle = Number(avatar.outfitStyle || 1);

        Object.entries(avatarStyleState).forEach(([group, value]) => {
            document
                .querySelectorAll(`[data-avatar-option="${group}"] .avatar-option`)
                .forEach(button => {
                    button.classList.toggle(
                        "active",
                        button.dataset.value === String(value)
                    );
                });
        });
    }


    function updateAvatarPreview() {
        avatarFace.style.background = characterSkin.value;
        avatarHair.style.background = characterHair.value;
        avatarShirt.style.background = characterClothes.value;

        applyAvatarClass(
            avatarFace,
            "face-style-",
            avatarStyleState.face
        );

        applyAvatarClass(
            avatarHair,
            "hair-style-",
            avatarStyleState.hairStyle
        );

        applyAvatarClass(
            avatarShirt,
            "outfit-style-",
            avatarStyleState.outfitStyle
        );

        document
            .querySelectorAll("#character-avatar-preview .avatar-eye")
            .forEach(eye => {
                eye.style.background = characterEyes.value;
                eye.style.color = characterEyes.value;

                applyAvatarClass(
                    eye,
                    "eye-style-",
                    avatarStyleState.eyesStyle
                );
            });

        document
            .querySelectorAll("#character-avatar-preview .avatar-brow")
            .forEach(brow => {
                applyAvatarClass(
                    brow,
                    "brow-style-",
                    avatarStyleState.browsStyle
                );
            });

        const mouth =
            document.querySelector(
                "#character-avatar-preview .avatar-mouth"
            );

        applyAvatarClass(
            mouth,
            "mouth-style-",
            avatarStyleState.mouthStyle
        );

        if (avatarAccessory) {
            Array.from(avatarAccessory.classList)
                .filter(className =>
                    className.startsWith("accessory-")
                )
                .forEach(className =>
                    avatarAccessory.classList.remove(className)
                );

            avatarAccessory.classList.add(
                `accessory-${avatarStyleState.accessory}`
            );
        }

        avatarPreviewName.textContent =
            characterName.value.trim() || "New Person";

        avatarPreviewRelationship.textContent =
            characterRelationship.value.trim() ||
            "Someone in your world";
    }



    function setCreatorMode(mode) {
        const editing =
            mode === "edit";

        if (creatorHeading) {
            creatorHeading.textContent =
                editing
                    ? "Edit Person"
                    : "Add Person";
        }

        if (creatorSaveTopButton) {
            creatorSaveTopButton.textContent =
                editing
                    ? "SAVE CHANGES"
                    : "SAVE";
        }

        if (creatorSaveBottomButton) {
            creatorSaveBottomButton.textContent =
                editing
                    ? "SAVE CHANGES"
                    : "SAVE PERSON";
        }
    }


    function resetCharacterForm() {
        characterForm.reset();

        editingCharacterId = null;

        characterSkin.value = "#f2c7a5";
        characterHair.value = "#4a2c24";
        characterEyes.value = "#2d2d2d";
        characterClothes.value = "#72cfff";

        resetAvatarStyleState();

        ratingNames.forEach(name => {
            const input = $(`rating-${name}`);
            const value = $(`rating-${name}-value`);

            if (input) input.value = "5";
            if (value) value.textContent = "5";
        });

        characterFormMessage.textContent = "";

        setCreatorMode("add");
        updateAvatarPreview();
        renderEmotionOptions();
    }


    function selectCharacterEmotions(emotions = []) {
        const selected = new Set(emotions);

        document
            .querySelectorAll(
                '#emotion-options input[name="character-emotion"]'
            )
            .forEach(input => {
                input.checked = selected.has(input.value);
            });
    }


    function fillCharacterForm(character) {
        if (!character) return;

        const avatar = character.avatar || {};

        characterName.value = character.name || "";
        characterNickname.value = character.nickname || "";
        characterRelationship.value = character.relationship || "";
        characterBirthday.value = character.birthday || "";
        characterNotes.value = character.notes || "";

        characterSkin.value = avatar.skin || "#f2c7a5";
        characterHair.value = avatar.hair || "#4a2c24";
        characterEyes.value = avatar.eyes || "#2d2d2d";
        characterClothes.value = avatar.clothes || "#72cfff";

        loadAvatarStyleState(avatar);

        ratingNames.forEach(name => {
            const input = $(`rating-${name}`);
            const value = $(`rating-${name}-value`);
            const rating = Number(character.ratings?.[name] ?? 5);

            if (input) input.value = String(rating);
            if (value) value.textContent = String(rating);
        });

        renderEmotionOptions();
        selectCharacterEmotions(character.emotions || []);

        characterFormMessage.textContent = "";
        updateAvatarPreview();
    }


    function openCharacterCreator() {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        resetCharacterForm();
        showScreen(characterCreatorScreen);
    }


    function openCharacterEditor(characterId) {
        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        const character = profile.characters.find(
            item => item.id === characterId
        );

        if (!character) {
            console.error(
                "SWAN: could not find the person to edit:",
                characterId
            );

            openPeopleScreen();
            return;
        }

        editingCharacterId = characterId;

        /* Open the creator first so the button always visibly responds. */
        showScreen(characterCreatorScreen);

        try {
            setCreatorMode("edit");
            fillCharacterForm(character);
        } catch (error) {
            console.error(
                "SWAN: could not load this person into the editor.",
                error
            );

            characterFormMessage.textContent =
                "SWAN had trouble loading part of this character. You can still edit and save them.";

            /* Load the essential fields even if a visual option fails. */
            characterName.value = character.name || "";
            characterNickname.value = character.nickname || "";
            characterRelationship.value = character.relationship || "";
            characterBirthday.value = character.birthday || "";
            characterNotes.value = character.notes || "";

            const avatar = character.avatar || {};

            characterSkin.value =
                avatar.skin || "#f2c7a5";

            characterHair.value =
                avatar.hair || "#4a2c24";

            characterEyes.value =
                avatar.eyes || "#2d2d2d";

            characterClothes.value =
                avatar.clothes || "#72cfff";

            updateAvatarPreview();
        }
    }


    function getSelectedEmotions() {
        return Array.from(
            document.querySelectorAll(
                '#emotion-options input[name="character-emotion"]:checked'
            )
        ).map(input => input.value);
    }


    function getRatings() {
        const ratings = {};

        ratingNames.forEach(name => {
            ratings[name] = Number($(`rating-${name}`).value);
        });

        return ratings;
    }


    function saveCharacter(event) {
        event.preventDefault();

        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        const name = characterName.value.trim();

        if (name.length < 1) {
            characterFormMessage.textContent =
                "Please give this person a name.";

            characterName.focus();
            return;
        }

        const formData = {
            name,
            nickname: characterNickname.value.trim(),
            relationship: characterRelationship.value.trim(),
            birthday: characterBirthday.value,
            notes: characterNotes.value.trim(),
            emotions: getSelectedEmotions(),
            ratings: getRatings(),
            avatar: {
                skin: characterSkin.value,
                hair: characterHair.value,
                eyes: characterEyes.value,
                clothes: characterClothes.value,
                face: avatarStyleState.face,
                hairStyle: avatarStyleState.hairStyle,
                eyesStyle: avatarStyleState.eyesStyle,
                browsStyle: avatarStyleState.browsStyle,
                mouthStyle: avatarStyleState.mouthStyle,
                accessory: avatarStyleState.accessory,
                outfitStyle: avatarStyleState.outfitStyle
            }
        };


        if (editingCharacterId) {
            const index = profile.characters.findIndex(
                character => character.id === editingCharacterId
            );

            if (index === -1) {
                characterFormMessage.textContent =
                    "SWAN could not find this person.";

                return;
            }

            const existing = profile.characters[index];

            profile.characters[index] = {
                ...existing,
                ...formData,
                updatedAt: new Date().toISOString()
            };

            saveProfile(profile);

            const savedId = editingCharacterId;
            editingCharacterId = null;
            selectedCharacterId = savedId;

            openCharacterProfile(savedId);
            return;
        }


        const character = {
            id: `person_${Date.now()}_${Math.random().toString(16).slice(2)}`,
            ...formData,
            events: [],
            createdAt: new Date().toISOString()
        };

        profile.characters.push(character);
        saveProfile(profile);

        loadDashboard();
    }


    /* =====================================
       PROFILE CREATION / LOGIN
    ====================================== */

    beginButton?.addEventListener("click", openProfileScreen);

    profileBackButton?.addEventListener("click", () => {
        showScreen(titleScreen);
    });


    createProfileForm?.addEventListener("submit", async event => {
        event.preventDefault();

        const username = createUsername.value.trim();
        const password = createPassword.value;
        const confirmation = confirmPassword.value;

        createMessage.textContent = "";

        if (username.length < 2) {
            createMessage.textContent =
                "Your username needs at least 2 characters.";
            return;
        }

        if (password.length < 4) {
            createMessage.textContent =
                "Your password needs at least 4 characters.";
            return;
        }

        if (password !== confirmation) {
            createMessage.textContent =
                "Your passwords do not match.";
            return;
        }

        try {
            const passwordHash = await hashPassword(password);

            const profile = {
                username,
                passwordHash,
                createdAt: new Date().toISOString(),
                characters: [],
                events: [],
                emotions: [],
                journal: [],
                relationships: [],
                notifications: [],
                achievements: [],
                unlockedThemes: ["default"],
                currentTheme: "default",
                statistics: {
                    totalCharacters: 0,
                    totalEvents: 0,
                    positiveEvents: 0,
                    negativeEvents: 0
                }
            };

            saveProfile(profile);
            updateProfileDisplay(profile);
            createProfileForm.reset();
            showScreen(mainMenuScreen);

        } catch (error) {
            console.error(error);
            createMessage.textContent =
                "Something went wrong creating your profile.";
        }
    });


    loginForm?.addEventListener("submit", async event => {
        event.preventDefault();

        const profile = normaliseProfile(getProfile());

        if (!profile) {
            openProfileScreen();
            return;
        }

        try {
            const enteredHash = await hashPassword(loginPassword.value);

            if (enteredHash !== profile.passwordHash) {
                loginMessage.textContent = "Incorrect password.";
                loginPassword.value = "";
                return;
            }

            loginMessage.textContent = "";
            loginPassword.value = "";
            updateProfileDisplay(profile);
            showScreen(mainMenuScreen);

        } catch (error) {
            console.error(error);
            loginMessage.textContent = "Something went wrong.";
        }
    });


    function logOut() {
        if (loginPassword) loginPassword.value = "";
        openProfileScreen();
    }


    logoutButton?.addEventListener("click", logOut);
    dashboardLogoutButton?.addEventListener("click", logOut);


    resetProfileButton?.addEventListener("click", () => {
        const choice = confirm(
            "Delete your local SWAN profile?\n\nThis cannot be undone."
        );

        if (!choice) return;

        localStorage.removeItem(PROFILE_KEY);
        createProfileForm.reset();
        loginForm.reset();
        openProfileScreen();
    });


    /* =====================================
       NAVIGATION
    ====================================== */

    continueButton?.addEventListener("click", loadDashboard);

    dashboardMenuButton?.addEventListener("click", () => {
        showScreen(mainMenuScreen);
    });

    const mainCharactersButton = Array.from(
        document.querySelectorAll(".menu-choice")
    ).find(button => button.textContent.trim() === "CHARACTERS");

    mainCharactersButton?.addEventListener("click", openPeopleScreen);

    addPersonButton?.addEventListener("click", openCharacterCreator);
    emptyAddPersonButton?.addEventListener("click", openCharacterCreator);
    peoplePreviewAdd?.addEventListener("click", openCharacterCreator);

    viewPeopleButton?.addEventListener("click", openPeopleScreen);
    navPeopleButton?.addEventListener("click", openPeopleScreen);

    peopleHomeButton?.addEventListener("click", loadDashboard);
    peopleAddButton?.addEventListener("click", openCharacterCreator);
    peopleEmptyAddButton?.addEventListener("click", openCharacterCreator);

    creatorBackButton?.addEventListener("click", () => {
        if (editingCharacterId) {
            const characterId = editingCharacterId;
            editingCharacterId = null;
            openCharacterProfile(characterId);
            return;
        }

        openPeopleScreen();
    });
    creatorSaveTopButton?.addEventListener("click", () => {
        characterForm.requestSubmit();
    });

    peopleSearch?.addEventListener("input", event => {
        renderPeople(event.target.value);
    });



    characterProfileBackButton?.addEventListener("click", openPeopleScreen);

    characterProfileDeleteButton?.addEventListener(
        "click",
        deleteSelectedCharacter
    );

    characterProfileEditButton?.addEventListener(
        "click",
        event => {
            event.preventDefault();
            editSelectedCharacter();
        }
    );

    profileAddEventButton?.addEventListener("click", () => {
        const character = getSelectedCharacter();
        if (!character) return;
        openEventCreator(character.id);
    });


    eventsHomeButton?.addEventListener("click", loadDashboard);
    eventsAddButton?.addEventListener("click", () => openEventCreator());
    eventsEmptyAddButton?.addEventListener("click", () => openEventCreator());

    eventsSearch?.addEventListener("input", event => {
        renderEvents(event.target.value);
    });

    eventCreatorBackButton?.addEventListener("click", () => {
        if (editingEventId) {
            const eventId = editingEventId;
            editingEventId = null;
            eventSourceCharacterId = null;

            openEventsScreen();
            showEventDetails(eventId);
            return;
        }

        if (eventSourceCharacterId) {
            const characterId =
                eventSourceCharacterId;

            eventSourceCharacterId = null;
            selectedCharacterId = characterId;

            openCharacterProfile(
                characterId
            );
            return;
        }

        openEventsScreen();
    });

    eventSaveTopButton?.addEventListener("click", () => {
        eventForm.requestSubmit();
    });

    eventAttachments?.addEventListener("change", renderAttachmentNames);
    eventForm?.addEventListener("submit", saveEvent);

    relationshipMapMenuButton?.addEventListener(
        "click",
        openRelationshipMap
    );

    peopleMapButton?.addEventListener(
        "click",
        openRelationshipMap
    );

    relationshipHomeButton?.addEventListener(
        "click",
        loadDashboard
    );

    relationshipAddButton?.addEventListener(
        "click",
        () => openRelationshipEditor()
    );

    relationshipResetViewButton?.addEventListener(
        "click",
        resetRelationshipPositions
    );

    relationshipModalClose?.addEventListener(
        "click",
        closeRelationshipModal
    );

    relationshipSaveButton?.addEventListener(
        "click",
        saveRelationshipConnection
    );

    relationshipDeleteButton?.addEventListener(
        "click",
        deleteRelationshipConnection
    );

    relationshipStrength?.addEventListener(
        "input",
        () => {
            relationshipStrengthValue.textContent =
                relationshipStrength.value;
        }
    );

    relationshipDetailsClose?.addEventListener(
        "click",
        closeRelationshipDetails
    );

    relationshipEditButton?.addEventListener(
        "click",
        () => {
            const connectionId = selectedRelationshipId;

            closeRelationshipDetails();

            if (connectionId) {
                openRelationshipEditor(connectionId);
            }
        }
    );

    relationshipDetailsPersonA?.addEventListener(
        "click",
        () => {
            const personId =
                relationshipDetailsPersonA.dataset.personId;

            if (!personId) return;

            closeRelationshipDetails();
            selectedCharacterId = personId;
            openCharacterProfile(personId);
        }
    );

    relationshipDetailsPersonB?.addEventListener(
        "click",
        () => {
            const personId =
                relationshipDetailsPersonB.dataset.personId;

            if (!personId) return;

            closeRelationshipDetails();
            selectedCharacterId = personId;
            openCharacterProfile(personId);
        }
    );

    window.addEventListener(
        "resize",
        () => {
            if (
                relationshipMapScreen?.classList.contains("active")
            ) {
                renderRelationshipMap();
            }
        }
    );


    journalMenuButton?.addEventListener(
        "click",
        openJournal
    );

    journalHomeButton?.addEventListener(
        "click",
        loadDashboard
    );

    journalNewButton?.addEventListener(
        "click",
        () => openJournalEditor()
    );

    journalEmptyNewButton?.addEventListener(
        "click",
        () => openJournalEditor()
    );

    journalSearch?.addEventListener(
        "input",
        event => {
            renderJournal(
                event.target.value
            );
        }
    );

    journalEditorBackButton?.addEventListener(
        "click",
        () => {
            editingJournalEntryId = null;
            openJournal();
        }
    );

    journalSaveTopButton?.addEventListener(
        "click",
        () => {
            journalForm.requestSubmit();
        }
    );

    journalDeleteButton?.addEventListener(
        "click",
        deleteJournalEntry
    );

    journalForm?.addEventListener(
        "submit",
        saveJournalEntry
    );


    statisticsMenuButton?.addEventListener(
        "click",
        openStatistics
    );

    statisticsHomeButton?.addEventListener(
        "click",
        loadDashboard
    );

    statisticsRefreshButton?.addEventListener(
        "click",
        renderStatistics
    );


    themesMenuButton?.addEventListener(
        "click",
        openThemes
    );

    themesHomeButton?.addEventListener(
        "click",
        loadDashboard
    );


    achievementsMenuButton?.addEventListener(
        "click",
        openAchievements
    );

    achievementsHomeButton?.addEventListener(
        "click",
        loadDashboard
    );


    settingsMenuButton?.addEventListener(
        "click",
        openSettings
    );

    settingsHomeButton?.addEventListener(
        "click",
        loadDashboard
    );

    settingsSaveUsername?.addEventListener(
        "click",
        saveUsernameSetting
    );

    settingsChangePassword?.addEventListener(
        "click",
        () => {
            changePasswordSetting();
        }
    );

    [
        settingsAnimations,
        settingsAmbient,
        settingsSoundEffects,
        settingsGreeting,
        settingsCompactMobile,
        settingsAchievementNotifications,
        settingsThemeNotifications,
        settingsBirthdayNotifications
    ].forEach(toggle => {
        toggle?.addEventListener(
            "change",
            saveToggleSettings
        );
    });

    settingsOpenThemes?.addEventListener(
        "click",
        openThemes
    );

    settingsExportData?.addEventListener(
        "click",
        exportSwanData
    );

    settingsImportData?.addEventListener(
        "change",
        event => {
            importSwanData(
                event.target.files?.[0]
            );
        }
    );

    settingsResetWorld?.addEventListener(
        "click",
        resetAllSwanData
    );


    dashboardNotificationsButton?.addEventListener("click", openNotificationCenter);
    notificationCenterClose?.addEventListener("click", closeNotificationCenter);
    notificationMarkAllRead?.addEventListener("click", markAllNotificationsRead);
    notificationClearAll?.addEventListener("click", clearNotifications);
    notificationCenter?.addEventListener("click", event => {
        if (event.target === notificationCenter) closeNotificationCenter();
    });

    eventDetailsClose?.addEventListener(
        "click",
        closeEventDetails
    );

    eventDetailsEdit?.addEventListener(
        "click",
        event => {
            event.preventDefault();

            const eventId =
                selectedEventId;

            if (!eventId) {
                console.error(
                    "SWAN: no event selected for editing."
                );
                return;
            }

            closeEventDetails();
            openEventCreator(null, eventId);
        }
    );

    eventDetailsDelete?.addEventListener(
        "click",
        deleteSelectedEvent
    );

    eventDetailsModal?.addEventListener(
        "click",
        event => {
            if (
                event.target ===
                eventDetailsModal
            ) {
                closeEventDetails();
            }
        }
    );




    /* =====================================
       PEOPLE ADD FALLBACKS
       Keeps every Add Person shortcut working.
    ====================================== */

    document.addEventListener(
        "click",
        event => {
            const addPersonTarget =
                event.target.closest(
                    "#add-person-button, " +
                    "#empty-add-person-button, " +
                    "#people-preview-add, " +
                    "#people-add-button, " +
                    "#people-empty-add-button, " +
                    ".add-person-preview"
                );

            if (!addPersonTarget) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            openCharacterCreator();
        }
    );


    /* =====================================
       DASHBOARD ACTION FALLBACKS
       Delegated listeners survive dashboard re-renders.
    ====================================== */

    dashboardScreen?.addEventListener(
        "click",
        event => {
            const addPersonTarget =
                event.target.closest("#add-person-button");

            if (addPersonTarget) {
                event.preventDefault();
                openCharacterCreator();
                return;
            }

            const addEventTarget =
                event.target.closest("#add-event-button");

            if (addEventTarget) {
                event.preventDefault();
                openEventCreator();
                return;
            }
        }
    );



    eventAutoScoreButton?.addEventListener(
        "click",
        applyEventScoreSuggestion
    );

    eventImportance?.addEventListener(
        "change",
        updateEventScoreSuggestionPreview
    );

    document
        .querySelectorAll(
            'input[name="event-impact"]'
        )
        .forEach(input => {
            input.addEventListener(
                "change",
                updateEventScoreSuggestionPreview
            );
        });


    installSwanButton?.addEventListener(
        "click",
        installSwan
    );

    installSwanDismiss?.addEventListener(
        "click",
        dismissInstallBanner
    );


    /* =====================================
       CREATOR LIVE CONTROLS
    ====================================== */

    [
        characterName,
        characterRelationship,
        characterSkin,
        characterHair,
        characterEyes,
        characterClothes
    ].forEach(input => {
        input?.addEventListener("input", updateAvatarPreview);
    });


    document
        .querySelectorAll("[data-avatar-option] .avatar-option")
        .forEach(button => {
            button.addEventListener("click", () => {
                const group =
                    button.closest("[data-avatar-option]")
                        ?.dataset.avatarOption;

                if (!group) {
                    return;
                }

                setAvatarOption(
                    group,
                    button.dataset.value
                );
            });
        });


    ratingNames.forEach(name => {
        const input = $(`rating-${name}`);
        const value = $(`rating-${name}-value`);

        input?.addEventListener("input", () => {
            value.textContent = input.value;
        });
    });


    addEmotionButton?.addEventListener("click", addCustomEmotion);

    newEmotionName?.addEventListener("keydown", event => {
        if (event.key === "Enter") {
            event.preventDefault();
            addCustomEmotion();
        }
    });

    characterForm?.addEventListener("submit", saveCharacter);


    /* =====================================
       PLACEHOLDERS FOR LATER
    ====================================== */

    addEventButton?.addEventListener("click", () => openEventCreator());
    navEventsButton?.addEventListener("click", openEventsScreen);

    journalButton?.addEventListener("click", openJournal);
    navJournalButton?.addEventListener("click", openJournal);

    navSettingsButton?.addEventListener(
        "click",
        openSettings
    );
    dashboardEventsViewAll?.addEventListener("click", openEventsScreen);
    dashboardPeopleViewAll?.addEventListener("click", openPeopleScreen);


    /* =====================================
       INITIAL LOAD
    ====================================== */

    updateMobileUiState();
    registerSwanServiceWorker();
    updateStandaloneState();

    if (isIOSDevice()) {
        window.setTimeout(
            showInstallBanner,
            1800
        );
    }

    startAmbientWorldClock();

    const existingProfile = normaliseProfile(getProfile());

    if (existingProfile) {
        updateProfileDisplay(existingProfile);
        calculateUnlockedThemes(existingProfile);
        updateAchievements(existingProfile);
        applyTheme(
            existingProfile.currentTheme ||
            "default"
        );
        applyAppSettings(existingProfile);
        syncSwanNotifications();
    } else {
        document.body.dataset.swanTheme =
            "default";
    }

});
