import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

// Initialize Firebase Admin SDK
function initFirebaseAdmin() {
  const apps = getApps();

  if (!apps.length) {
    initializeApp({
      credential: cert({
        projectId: "prepview-dc985",
        clientEmail:
          "firebase-adminsdk-fbsvc@prepview-dc985.iam.gserviceaccount.com",
        // Replace newlines in the private key
        privateKey:
          "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCYAzDpm2NCiBDU\n/2W6gV6yIggMZmZVQizu4yZmYEXJZgnCxC8Lyxn6oaulwPMNwq2M5vUvtwRVd2oc\nMyE6V5bIOyCnYs1ZHxhea1JyAwfqn26NEI6TikP3Uug43Rf/DKH22c8F2eRGTt+C\nzmPeVZlo33ybZwSESVNe1esR1EOVkG5E/ivenSVjhFA8iS1tLmCspeBjXxypS9Qy\n8cmdPnQgmxK4Un4kqjGfat5nYnOHuhjl0ZOSVDVyD7gK4/bek6UlUvB98ElTfJ+Q\ne49oe/x2/axH7Wdt3YIQiPbH66Oz4k5h7sx4zVF6uAsxqqkfIdC/eIUNbMWFp2sb\n0kQxLGZJAgMBAAECggEABYkHi4N1axYIz4oS7SZqVBVh/STvwNbay4JueB0KgCxX\nb9CUf6WwPGc4LfOMy4QQApjjYI7Vw9CdcXRELLtv7w/GHzToEit2x/NjqmlQAma2\npWuEVueFP4404g3c9+mAw/wc6iiLw9VPQBReCxnLWbKvoc9ablW8M9sZcZ9XgayV\nFL22tk3TCQLpZCfO+VTGosWYERn1CjWaXMMUo7WmMLIc0k+mVCu+cKCcBWO6QaNe\nSi1NEphcfXtukH7roM/FgstlQDgJbVyytOt6wFuVF72hztntqWOOh89Dnxp/JBCI\nXd/jehrj2rsT/2prgAV5XHs2R852y+U2QlrK3i31vQKBgQDJQbUuDJHUfAJXFbEf\nYFbmIdErjzA/HpiLEoBQa1zmRZeVefQX1WWWFPcJm/fr5IAkRCNw4jMEVRuKUYVY\nNnJnewbWxjE2e44jdsPiB2d6Ancj+7atV19rQRtmfPijAGN7yEWhCpdFKC2mAteq\nELf7964vBoXkT53ry8okrf1JPQKBgQDBXGp5kV8/iyjbZyIYfo+XRMiDKHGujARZ\nonKFXbmfjfDQE303h9snjAVAc/GErNdA6EZG0I0iynyLodeuzasmxedLQc3BI3Tv\nqE8hJ3AywHgZTo6wpkUHMH8+kHfFxkI2HZbS6ZTR6GaBahoQt9QNw/chaoYpTiMV\nWs6lKSVp/QKBgCVv6qMRRYNQOiM27sbWZfPTMJS4wxHKwDeGjoXnItXW9jahA+33\nDTmY1sdb0wd3bvrQDgOuoCzbJA9b0MEzB58GPKRxI7Bt1Wf1bMS7+dyxXrY72aRv\nD1nlN5KeBqZTqS3aeFFXpgIAUlWCS9nf2EmvriAjR37L7KVzODwQfYBFAoGAQTB2\nGTxAn3y8LpQrs5RftsES1N06zn0YLlwNPhdmMHu7N3uKmMEtyrxzPNKaF3/qJlDo\n+JDxNEyOBslunNlsHWtVWlL6GmZo0y+sVeIk+odXNjj89GNqHE1maOJt7vizc+kv\n4zWq3cX7YSAzX3WKgYWS+OogByb3vwhZaOdhXMUCgYEAnlvXPPnTkXfDZhGSJtTR\nJM1MHPcHkhQ8SNxKZws/ppG8M+UHgHDi1N7ukltt+TM1Q3KIaaqGgE/egNNBjni5\nDS0+HUGkmew78q3CcPVpzjwNIA3Ye2IdIANqE7ehHw7Lzj4eW2iPJsIqoqt5gc3t\n7L1/2dBV+5SEHqEAUz37Pgs=\n-----END PRIVATE KEY-----\n"?.replace(
            /\\n/g,
            "\n"
          ),
      }),
    });
  }

  return {
    auth: getAuth(),
    db: getFirestore(),
  };
}

export const { auth, db } = initFirebaseAdmin();
