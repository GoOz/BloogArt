import { DateTime } from "luxon"
import path from "path"
import Image from "@11ty/eleventy-img"

export default function (eleventyConfig) {
	eleventyConfig.addFilter("readableDate", (date) => {
		const dateObj = new Date(date)
		return dateObj.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		})
	})

	eleventyConfig.addFilter("htmlDateString", (dateObj) => {
		// dateObj input: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
		return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd")
	})

	// Return the smallest number argument
	eleventyConfig.addFilter("min", (...numbers) => {
		return Math.min.apply(null, numbers)
	})

	// Return the keys used in an object
	eleventyConfig.addFilter("getKeys", (target) => {
		return Object.keys(target)
	})

	eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
			return (tags || []).filter(
				(tag) => ["all", "nav", "posts", "pages", "featured"].indexOf(tag) === -1,
			)
		})

		eleventyConfig.addFilter(
			"filterTagSeries",
			function filterTagSeries(tags, series) {
				return (tags || []).filter((tag) => series.indexOf(tag) === -1)
			},
		)

	async function contentImgUrlFilter(src) {
		const inputDir = path.dirname(this.page.inputPath)
		const imagePath = path.resolve(inputDir, src)
		const outputDir = path.dirname(this.page.outputPath)
		const urlPath = this.page.url

		const stats = await Image(imagePath, {
			widths: [1400], // Width for Open Graph image
			formats: ["jpg"],
			outputDir: outputDir, // Output directory
			urlPath: urlPath, // Public URL path
			filenameFormat: function (hash, src, width, format) {
				return `${hash}-${width}.${format}`
			},
		})

		return stats.jpeg[0].url // Return the URL of the processed image
	}

	eleventyConfig.addFilter("contentImgUrlFilter", contentImgUrlFilter)
}
